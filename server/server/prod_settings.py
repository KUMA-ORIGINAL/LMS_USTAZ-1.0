from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-#8pift(78=tr!%gbixs6%uk%)y3!msba6uca=@1-%u&5n77zoc'

DEBUG = False

ALLOWED_HOSTS = ['127.0.0.1']


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'ustaz',
        'USER': 'postgres',
        'PASSWORD': '123456',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

STATIC_DIR = BASE_DIR / 'static'
STATIC_ROOT = BASE_DIR / 'static'
STATICFILES_DIRS = [STATIC_DIR]
