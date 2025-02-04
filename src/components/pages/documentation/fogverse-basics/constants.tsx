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

/*
export const ABSTRACT_CONSUMER = {
  start_consumer: `async def start_consumer(self):
    pass`,

  receive_error: `def receive_error(self, *args, **kwargs):
    pass`,
};

export const ABSTRACT_PRODUCER = {
  start_producer: `async def start_producer(self):
    logger = getattr(self, '_log', None)
    if isinstance(logger, FogVerseLogging):
        logger.std_log('Config: %s', self._producer_conf)
        if getattr(self, 'producer_topic', None) is not None:
            logger.std_log('Topic: %s', self.producer_topic)
    await self.producer.start()`,

  receive_error: `def receive_error(self, *args, **kwargs):
      pass`,
};
*/
