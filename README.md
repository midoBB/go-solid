# GoSolid

A simple showcase of embedding a SolidJs app within a Golang Echo server.
The reason for using SolidJs is mainly the ease of using hash based routers which
remove a lot of headaches concerning the routes from the Go Side.

First you need to compile the frontend:
`cd web && yarn && yarn build`

Afterward to run simply just use
`just`
or
`go run main.go`
