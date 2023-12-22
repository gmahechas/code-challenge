from flask import Flask
from flask_cors import CORS

from .routes import init_routes
from .utils.most_used_words import MostUsedWords


def create_app() -> Flask:
    application = Flask(__name__)
    CORS(application)

    with application.app_context():
        init_routes()
        MostUsedWords.init_words()

    return application
