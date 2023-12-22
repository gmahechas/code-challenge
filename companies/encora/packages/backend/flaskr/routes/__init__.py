from flask import Blueprint, current_app
from .v1 import v1_blueprint

rest_blueprint = Blueprint(name='rest', import_name=__name__, url_prefix='/rest')


def init_routes():
    rest_blueprint.register_blueprint(v1_blueprint)
    current_app.register_blueprint(rest_blueprint)
