export const PRODUCER = {
  initialization: `from fogverse import Producer
from dotenv import load_dotenv

load_dotenv()
class MyProducer(Producer):
	def __init__(self, loop=None):
		self.producer_topic = ''            # message topic
        self.producer_servers = ['']        # kafka servers
        auto_decode = False                 # decode every received message
        auto_encode = False                 # encode every sent message
        encode_encoding = ''                # encoding type (jpg, png, etc.)
		Producer.__init__(self, loop=loop)`,
};
