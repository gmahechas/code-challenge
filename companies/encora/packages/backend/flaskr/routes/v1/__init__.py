from flask import Blueprint
from .file_routes import file_blueprint

v1_blueprint = Blueprint(name='v1', import_name=__name__, url_prefix='/v1')
v1_blueprint.register_blueprint(file_blueprint)
