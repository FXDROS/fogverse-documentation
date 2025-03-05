export const PRODUCER = {
  initialization: `from fogverse import Producer

class MyProducer(Producer):
	def __init__(self):
		self.producer_topic = ''            # message topic
        self.producer_servers = ['']        # kafka servers
        auto_decode = False                 # decode every received message
        auto_encode = False                 # encode every sent message
        encode_encoding = ''                # encoding type (jpg, png, etc.)
		Producer.__init__(self)`,

  base_functions: `    async def start_producer(self):
        # TODO: Implement code if needed
        await super().start_producer()

    async def send(self, data, topic=None, key=None, headers=None,
                   callback=None):
        # TODO: Implement code if needed
        await super().send(data, topic=topic, key=key,
                            headers=headers, callback=callback)

    async def close_producer(self):
        # TODO: Implement code if needed
        await super().close_producer()

    async def receive(self):
        # TODO: Implement code`,
};

export const CONSUMER = {
  initialization: `from fogverse import Consumer

class MyConsumer(Consumer):
    def __init__(self):
        self.consumer_topic = ['']          # message topic
        self.consumer_servers = ['']        # kafka servers
        auto_decode = False                 # decode every received message
        auto_encode = False                 # encode every sent message
        encode_encoding = ''                # encoding type (jpg, png, etc.)
        Consumer.__init__(self)`,

  base_functions: `    async def start_consumer(self):
        # TODO: Implement code if needed
        await super().start_consumer()

    async def receive(self):
        # TODO: Implement code if needed
        await super().receive()

    async def close_consumer(self):
        # TODO: Implement code if needed
        await super().close_consumer()

    async def _send(self, data, *args, **kwargs):
        # TODO: Implement code`,
};

export const CONSUMER_STORAGE = {
  initialization: `from fogverse import Consumer, ConsumerStorage

class MyConsumer(Consumer, ConsumerStorage):
    def __init__(self):
        self.consumer_topic = ['']          # message topic
        self.consumer_servers = ['']        # kafka servers
        auto_decode = False                 # decode every received message
        auto_encode = False                 # encode every sent message
        encode_encoding = ''                # encoding type (jpg, png, etc.)
        Consumer.__init__(self)
        ConsumerStorage.__init__(self, keep_messages=False)`,
};

export const OPENCV_CONSUMER = {
  initialization: `from fogverse import OpenCVConsumer

class MyCameraConsumer(OpenCVConsumer):
    def __init__(self):
        OpenCVConsumer.__init__(self)`,

  set_properties: `from fogverse import OpenCVConsumer

class MyCameraConsumer(OpenCVConsumer):
    def __init__(self):
        OpenCVConsumer.__init__(self)
        self.consumer.set(cv2.CAP_PROP_FRAME_WIDTH, 680)
        self.consumer.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
        self.consumer.set(cv2.CAP_PROP_FPS, 5)`,
};

export const PROFILING = {
  initialization: `from fogverse import Producer
from fogverse.profiling import Profiling

class MyProducer(Producer):
	def __init__(self):
		self.producer_topic = ''            # message topic
		self.producer_servers = ['']        # kafka servers
		Producer.__init__(self)
		Profiling.__init__(self, name='', dirname='')`,

  example: `import numpy as np
import asyncio
import datetime

from dotenv import load_dotenv
from fogverse import Producer
from fogverse.profiling import Profiling
from pathlib import Path

CSV_DIR = Path('logs') / datetime.datetime.today().strftime('%Y%m%d%H%M%S')

load_dotenv()
class MyProducer(Producer, Profiling):
	def __init__(self, loop=None):
		self.producer_topic = 'input'
		profiling_name = f'{self.__class__.__name__}'
		Producer.__init__(self, loop=loop)
    	Profiling.__init__(self, name=profiling_name, dirname=CSV_DIR)`,
};
