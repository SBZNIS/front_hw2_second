import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Определяем путь к файлу data.json
const dataFilePath = path.join(process.cwd(), 'app/data.json');

export async function POST(request) {
  const newTask = await request.json();

  // Читаем существующие данные
  const fileContents = fs.readFileSync(dataFilePath, 'utf-8');
  const tasks = JSON.parse(fileContents);

  // Добавляем новую задачу
  tasks.push(newTask);

  // Сохраняем обновленные данные обратно в файл
  fs.writeFileSync(dataFilePath, JSON.stringify(tasks, null, 2));

  // Отправляем успешный ответ
  return NextResponse.json(newTask, { status: 201 });
}
