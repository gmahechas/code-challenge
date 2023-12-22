from flask import Blueprint, request
from werkzeug.datastructures import FileStorage
from ...utils.http_methods import HttpMethods
from ...controllers.v1.file_controller import upload_file

file_blueprint = Blueprint(name='file', import_name=__name__, url_prefix='/file')


@file_blueprint.route(rule='/upload', methods=[HttpMethods.POST.value])
def upload():
    [file] = request.files.getlist('file')
    if file and isinstance(file, FileStorage):
        return upload_file(file)
    else:
        return {'error': True}
