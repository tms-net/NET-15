﻿# Сериализация и Рефлексия
Для понимания принципов работы Рефлексии и термина сериализации необходимо разработать класс, который сможет конвертировать объекты в CSV формат и обратно.
CSV формат представляет собой текстовый формат, предназначенный для представления табличных данных. Строка таблицы соответствует строке текста, которая содержит одно или несколько полей, разделенных запятыми.
При этом, первая строка может содержать названия соответствующих полей.

### Описание работы программы TMS.NET15.CsvService
  - Программа создает объект вспомогательного класса `CsvService`, который помогает сохранять и считыать файлы, содержащие информацию об объектах
  - Программа создает список, содержащий объекты типа `OrderProduct`, описывающие продукты в заказе
  - Пограмма заполняет список продуктов, введенный пользователем
  - Программа сохраняет продукты в файл в формате CSV
  - Программа считывает файл, содержащий ниформацию о продуктах и выводит информацию о них

### Требования к программе
  - Написать код, заполняющий список продуктов информацией, введенной пользователем
  - Написать логику преобразования списка объектов в CSV формат (класс `CsvSerializer`)
  - Написать логику преобразования текста в CSV формате в список объектов (класс `CsvSerializer`)

### Дополнительнео задание
  - Создать вместо списка продуктов с список заказов (`Order`) и преобразовать его в формат CSV и обратно
  - Дополнить класс `CsvService` возможностью считывать файл по определенной дате (передается в метод)

## Подтверждение выполнения
После выполнения задания (или этапов задания) используйте `git` репозиторий для сохранения Ваших изменений.

 - Создайте ветку (`branch`) в репозитории https://github.com/tms-net/NET-15 с именем '{ФАМИЛИЯ}/{ОПИСАНИЕ_ЗАДАНИЯ}', например 'andrienko/lesson-4-products'

 - Сделайте коммит (`commit`) в ветке с нужным набором изменений и соответствующим комментарием. Например, коммит после описания продукта с сообщением 'Added product attributes to Product class' (на любом языке)

 - Отправьте изменения в удаленный репозиторий (`push`) и создайте `pull request` в ветку `main`







