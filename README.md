# 🧪📩 notification-tester

## Usage

1. Clone repo
2. Install dependencies: `npm i`
3. Create the `config/local.json` file using this command:

```bash
$ echo '{\n  "serverKey": "",\n  "device": ""\n}' > config/local.json
```

4. Replace "serverKey" and "device" in `config/local.json` with the real values.
5. Run `node index` 🙌

> You can obtain serverKey from your FCM console
> Device is the FCM token linked to the pshical device
