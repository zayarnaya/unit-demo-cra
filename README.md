Привет проверяющему!
=


Итак, к делу.

1. На коммиты стоит прекоммит с линтом и вроде бы коммитлинтом, но не уверена

2. На ПР стоит запуск тестов юнит, e2e, ну и еще раз еслинт и коммитлинт. Файлы [tests.yml](https://github.com/zayarnaya/unit-demo-cra/blob/master/.github/workflows/tests.yml), [lint.yml](https://github.com/zayarnaya/unit-demo-cra/blob/master/.github/workflows/lint.yml) и [commitlint.yml](https://github.com/zayarnaya/unit-demo-cra/blob/master/.github/workflows/commitlint.yml) соответственно

3. Без пройденных проверок ПР не мержится

4. На пуш релизного тега запускается экшн, который делает issue с небольшой инфой и ченджлогом. 
Я запуталась на предмет что там в ифы поставить, чтоб апдейтнуть, если надо. Но не могу измыслить ситуацию, когда понадобится апдейт. Если что - там закомментирован процесс апдейта. Файл [createissue.yml](https://github.com/zayarnaya/unit-demo-cra/blob/master/.github/workflows/createissue.yml). А. Еще почему-то ченджлог не на все коммиты пишется корректно. UPD поняла, если несколько коммитов - он вылетает, сделала в несколько строк по подсказке Димы Снитко.

5. Для красоты перед деплоем надо закрыть ПР ручками, иначе деплой пойдет с того, что есть в мастере

6. Деплой надо запускать ручками, из раздела [Actions](https://github.com/zayarnaya/unit-demo-cra/actions) -> экшн с названием [DEPLOY](https://github.com/zayarnaya/unit-demo-cra/actions/workflows/release.yml) (файл [release.yml](https://github.com/zayarnaya/unit-demo-cra/blob/master/.github/workflows/tests.yml))

7. Перед деплоем снова прогоняются тесты (без линтеров), ссылки на результаты валятся комментами в issue. По-хорошему, стоило бы прерваться именно на этом моменте, чтобы деплой пинался человеком, но уже неможливо. Да, ссылок получается две, но ведут они на одно и то же - на весь воркфлоу

8. Деплоится оно на [gh pages](https://zayarnaya.github.io/unit-demo-cra/). Ссылки надо прощелкать, чтобы что-то появилось (это общая проблема, кто-то менял, я нет)

9. После деплоя ишью закрывается со ссылкой на деплой. Теоретически закрывается правильная ишью. В соответствующем [разделе](https://github.com/zayarnaya/unit-demo-cra/issues?q=is%3Aissue+is%3Aclosed) можно посмотреть примеры

10. Тегов и коммитов у меня в репе как у дурака фантиков, извинити. **Последний заюзанный релизный тег - v37**

11. Телега для связи [@verozzy](https://t.me/verozzy)

*Спасибо за проверку!*


В этом репозитории находится пример приложения с тестами:

- [e2e тесты](e2e/example.spec.ts)
- [unit тесты](src/example.test.tsx)

Для запуска примеров необходимо установить [NodeJS](https://nodejs.org/en/download/) 16 или выше.

Как запустить:

```sh
# установить зависимости
npm ci

# запустить приложение
npm start
```

Как запустить e2e тесты:

```sh
# скачать браузеры
npx playwright install

# запустить тесты
npm run e2e
```

Как запустить модульные тесты:

```sh
npm test
```
