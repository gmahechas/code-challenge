from .http_client import HttpClient
from .read_file import ReadFile


class MostUsedWords:

    words = None

    @staticmethod
    def init_words():
        response = HttpClient.get(
            'https://gist.githubusercontent.com/deekayen/4148741/raw/98d35708fa344717d8eee15d11987de6c8e26d7d/1-1000.txt',
        )

        words_dict = {}
        for word in ReadFile.line_by_line_from_http_response(response, 100):
            words_dict[word.lower()] = 0
        MostUsedWords.words = words_dict

    @staticmethod
    def get_words():
        return MostUsedWords.words
