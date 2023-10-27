FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usta_server
# Копируем файл requirements.txt внутрь контейнера
COPY requirements.txt ./
# Устанавливаем зависимости, описанные в файле requirements.txt
COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

COPY . /usta_server/