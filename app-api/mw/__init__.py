from flask import Flask
from .content_api import blog_api  # Import your routes

def create_app():
    app = Flask(__name__)

    # Register Blueprints or routes
    app.register_blueprint(blog_api)


    return app
