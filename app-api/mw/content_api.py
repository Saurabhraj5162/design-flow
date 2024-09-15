from flask import Blueprint, jsonify, request
from pymongo import MongoClient
from dotenv import load_dotenv
import os
# Load environment variables from .env file
load_dotenv()

# Create a Blueprint for the blog routes
blog_api = Blueprint('blog_api', __name__)

# MongoDB connection details

MONGO_URI = os.getenv('MONGO_URI')
client = MongoClient(MONGO_URI)


# Select the database and collection
db = client['test']
collection = db['blogs']


@blog_api.route('/api/blog', methods=['POST'])
def create_blog():
    # Extract data from the POST request
    data = request.json
    title = data.get('title')
    author = data.get('author')
    date = data.get('date')
    intro = data.get('intro')
    sections = data.get('sections')
    externalLinks = data.get('externalLinks')

    # Insert blog into the MongoDB collection
    blog_data = {
        'title': title,
        'author': author,
        'date': date,
        'intro': intro,
        'sections': sections,
        'externalLinks': externalLinks
    }

    result = collection.insert_one(blog_data)  # Insert the blog into MongoDB
    
    return jsonify({"message": "Blog created", "id": str(result.inserted_id)}), 201


# @blog_api.route('/api/blog/<title>', methods=['GET'])
# def get_blog(title):
#     # Find the blog in MongoDB by title
#     blog = collection.find_one({"title": title})
    
#     if blog:
#         blog['_id'] = str(blog['_id'])  # Convert ObjectId to string for JSON serialization
#         return jsonify(blog), 200
#     else:
#         return jsonify({"error": "Blog not found"}), 404


@blog_api.route('/api/blog/<title>', methods=['GET'])
def get_blogs_by_topic(title):
    # Find a blog in MongoDB by title
    blog = collection.find_one({"title": title})
    
    if blog:
        # Convert ObjectId to string for JSON serialization
        blog['_id'] = str(blog['_id'])
        return jsonify(blog), 200
    else:
        return jsonify({"error": "Blog not found"}), 404


# @blog_api.route('/api/blog/<title>', methods=['PUT'])
# def update_blog(title):
#     data = request.json
#     # Update blog content based on the title
#     updated_blog = {
#         "$set": {
#             'intro': data.get('intro'),
#             'sections': data.get('sections'),
#             'externalLinks': data.get('externalLinks')
#         }
#     }
    
#     result = collection.update_one({"title": title}, updated_blog)
    
#     if result.matched_count:
#         return jsonify({"message": "Blog updated"}), 200
#     else:
#         return jsonify({"error": "Blog not found"}), 404


# @blog_api.route('/api/blog/<title>', methods=['DELETE'])
# def delete_blog(title):
#     result = collection.delete_one({"title": title})
    
#     if result.deleted_count:
#         return jsonify({"message": "Blog deleted"}), 200
#     else:
#         return jsonify({"error": "Blog not found"}), 404
