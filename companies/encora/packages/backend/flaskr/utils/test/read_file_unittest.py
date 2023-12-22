import unittest
from unittest.mock import MagicMock

from ..read_file import ReadFile


class TestReadFile(unittest.TestCase):

    def test_lines_returned_without_skipping(self):
        response_mock = MagicMock()
        response_mock.iter_lines.return_value = [b'Line 1', b'Line 2', b'Line 3']

        lines_generator = ReadFile.line_by_line_from_http_response(response_mock)
        lines = list(lines_generator)

        self.assertListEqual(lines, [b'Line 1', b'Line 2', b'Line 3'])

    def test_lines_skipped_properly(self):
        response_mock = MagicMock()
        response_mock.iter_lines.return_value = [b'Line 1', b'Line 2', b'Line 3']

        lines_generator = ReadFile.line_by_line_from_http_response(response_mock, lines_to_skip=2)
        lines = list(lines_generator)

        self.assertListEqual(lines, [b'Line 3'])


if __name__ == '__main__':
    unittest.main()

