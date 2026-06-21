import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

const FILE_PATH = 'messages.json';

// No changes are required in the MessagesRepository
// since this does not have any dependency in its
// constructor.

@Injectable()
class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile(FILE_PATH, 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile(FILE_PATH, 'utf-8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile(FILE_PATH, 'utf-8');
    const messages = JSON.parse(contents);
    const length = Object.keys(messages).length;
    const id = (length + 1).toString();

    messages[id] = {
      content,
      id,
    };

    await writeFile(FILE_PATH, JSON.stringify(messages));

    return messages[id];
  }
}

export { MessagesRepository };
