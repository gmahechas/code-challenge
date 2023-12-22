import requests
from werkzeug.datastructures import FileStorage


class ReadFile:

    @staticmethod
    def line_by_line_from_http_response(http_response: requests.Response, lines_to_skip: int | None = None):
        lines_read = 0
        for line in http_response.iter_lines(decode_unicode=True):
            if lines_to_skip is None:
                yield line
            elif lines_read >= lines_to_skip:
                lines_read += 1
                yield line
            else:
                lines_read += 1
                continue

    @staticmethod
    def word_by_word_from_file(file: FileStorage, lines_to_read: int | None = None):
        lines_read = 0
        file_stream = file.stream
        for line in file_stream:
            if lines_to_read is None:
                yield from line.decode('utf-8').strip().split()
            elif lines_read < lines_to_read:
                lines_read += 1
                yield from line.decode('utf-8').strip().split()
            else:
                break
