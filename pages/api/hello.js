//this is accessed at *DOMAIN*/api/hello, same as usual

//BUT this is all server-side code, so you can persist to a database here
//kind of wierd organization though

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
