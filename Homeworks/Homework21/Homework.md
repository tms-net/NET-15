﻿# ASP.NET - База
Для понимания принципов работы фреймворка asp.net создайте и сконфигурируйте приложение, которое позволит загружать части стихотворения на web странице, в зависимости от выбора.

### Описание работы программы TMS.NET15.FileServer
  - HTML для Web страницы находится в папке [Html](./Content/Html)
  - Клиентский код (JavaScript) реализует функционал загрузки части стихотворения с помощью асинхронного запроса
  - Серверная программа использует ПО промежуточного уровня StaticFilesMiddlware для возможности получения файлов с помощью HTTP запроса
  - Файлы с содержимым частей стихотворения находятся в папке [Text](./Content/Text) 

### Требования к программе
  - Дополнить проект и код нужными файлами для корректной работы приложения
  - Изменяйте клиентский код, если нужно
  - Сконфигурировать и запустить серверное приложение так, чтобы функционал работал корректно
  - Обязательно используйте возможности [StaticFilesMiddlware](https://docs.microsoft.com/ru-ru/aspnet/core/fundamentals/static-files?view=aspnetcore-6.0)
  - Дополняйте ПО промежуточного уровня любыми способами, если нужно

## Подтверждение выполнения
После выполнения задания (или этапов задания) используйте `git` репозиторий для сохранения Ваших изменений.

 - Создайте ветку (`branch`) в репозитории https://github.com/tms-net/NET-15 с именем '{ФАМИЛИЯ}/{ОПИСАНИЕ_ЗАДАНИЯ}', например 'andrienko/lesson-4-products'

 - Сделайте коммит (`commit`) в ветке с нужным набором изменений и соответствующим комментарием. Например, коммит после описания продукта с сообщением 'Added product attributes to Product class' (на любом языке)

 - Отправьте изменения в удаленный репозиторий (`push`) и создайте `pull request` в ветку `main`







