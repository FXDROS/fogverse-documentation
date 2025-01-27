export const BASH_COMMAND = {
  pip_installation: `pip install git+https://github.com/FXDROS/fogverse.git@main`,
  github_installation: `pip install fogverse/`,
  zookeeper_server: `bin/zookeeper-server-start.sh config/zookeeper.properties`,
  kafka_server: `bin/kafka-server-start.sh config/server.properties`,
};

export const SAMPLE_PRODUCER = {
  initialization: `import numpy as np
import asyncio

from fogverse import Producer
from dotenv import load_dotenv

load_dotenv()
class MyProducer(Producer):
	def __init__(self, loop=None):
		self.producer_topic = 'input'
		Producer.__init__(self, loop=loop)`,

  receive: `	async def receive(self):
		data = np.random.randint(100, size=(3, 3))
		return data`,

  run: `async def main():
	producer = MyProducer()
	tasks = [producer.run()]

	try:
		await asyncio.gather(*tasks)
	except:
		for t in tasks:
			t.close()

if __name__ == '__main__':
	asyncio.run(main())`,

  all: `import numpy as np
import asyncio

from fogverse import Producer
from dotenv import load_dotenv

load_dotenv()
class MyProducer(Producer):
    def __init__(self, loop=None):
        self.producer_topic = 'input'
        Producer.__init__(self, loop=loop)

    async def receive(self):
        data = np.random.randint(100, size=(3, 3))
        return data

async def main():
    producer = MyProducer()
    tasks = [producer.run()]

    try:
        await asyncio.gather(*tasks)
    except:
        for t in tasks:
            t.close()

if __name__ == '__main__':
	asyncio.run(main())`,
};

export const SAMPLE_CONSUMER = {
  initialization: `import io
import numpy as np
import asyncio

from fogverse import Consumer
from dotenv import load_dotenv

load_dotenv()
class MyConsumer(Consumer):
	def __init__(self, loop=None):
    	self.consumer_topic = 'input'
    	Consumer.__init__(self)`,

  send: `	async def _send(self, data, *args, **kwargs):
		def __send(data):
    	array = np.load(io.BytesIO(data))
      	print (array)
			return await self._loop.run_in_executor(None, __send, data)`,

  run: `async def main():
  consumer = MyConsumer()
  tasks = [consumer.run()]

	try:
		await asyncio.gather(*tasks)
	except:
		for t in tasks:
		t.close()

if __name__ == '__main__':
	asyncio.run(main())`,

  all: `import io
import numpy as np
import asyncio

from fogverse import Consumer
from dotenv import load_dotenv

load_dotenv()
class MyConsumer(Consumer):
	def __init__(self, loop=None):
		self.consumer_topic = 'input'
		Consumer.__init__(self)

	async def _send(self, data, *args, **kwargs):
		def __send(data):
			array = np.load(io.BytesIO(data))
			print (array)
		return await self._loop.run_in_executor(None, __send, data)

async def main():
	consumer = MyConsumer()
	tasks = [consumer.run()]

	try:
		await asyncio.gather(*tasks)
	except:
		for t in tasks:
			t.close()

if __name__ == '__main__':
	asyncio.run(main())`,
};

export const FIRST_RUN = `[[84  5 43]
 [89 13 42]
 [45 91 85]]
[[19 81 45]
 [72 18  0]
 [ 7 76 22]]
[[16 75 18]
 [98 59 69]
 [59 13 62]]
[[ 8 76 55]
 [57 25 23]
 [92 43  1]]
...
`;
