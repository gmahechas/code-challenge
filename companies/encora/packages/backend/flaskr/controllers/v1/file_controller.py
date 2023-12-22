from werkzeug.datastructures import FileStorage
import copy
from ...utils.read_file import ReadFile
from ...utils.most_used_words import MostUsedWords


def upload_file(file: FileStorage):
    words_dict = copy.deepcopy(MostUsedWords.get_words())

    for word in ReadFile.word_by_word_from_file(file):
        lower_word = word.lower()
        if lower_word in words_dict:
            words_dict[lower_word] += 1

    sorted_dict_descending = [
        {"word": item[0], "count": item[1]} for item in
        sorted(words_dict.items(), key=lambda item: item[1], reverse=True)
    ]

    return sorted_dict_descending
