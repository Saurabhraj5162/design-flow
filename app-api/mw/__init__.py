from flask import Flask
from .content_api import blog_api  # Import your routes
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    # Enable CORS for all routes
    CORS(app)
    # Register Blueprints or routes
    app.register_blueprint(blog_api)


    return app
