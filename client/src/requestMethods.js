import axios from "axios"

const BASE_URL = "https://returnedinc-api.vercel.app/api/"
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODE3YWMzMTU0YTA5MGM3ZjA2ZmRiZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzIwNDU4OCwiZXhwIjoxNzAzNDYzNzg4fQ.cHXTJ4NkfhXWL-9SgdSg9-918itJcvLX9wR5EAJ0yMA"
export const publicRequest = axios.create({
	baseURL: BASE_URL,
})

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` },
})
