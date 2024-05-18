package fasterlib

import (
	"log/slog"
	"time"

	"github.com/hesusruiz/vcutils/yaml"
	"github.com/kataras/iris/v12"
	"github.com/pkg/browser"
)

type server struct {
	app *iris.Application
	cfg *yaml.YAML
}

// DevServer is a simple development server to help develop PWAs in a
// tool-less fashion.
// It supports serving static files locally for the user interface, and
// proxying other API requests to another server.
func DevServer(cfg *yaml.YAML) {

	// Create the server, embedding and HTTP server
	app := iris.Default()
	s := &server{}
	s.app = app
	s.cfg = cfg

	// Handle the Webapp
	app.HandleDir("/", iris.Dir("www"))

	// Open the default platform browser to display the UI
	go func() {
		time.Sleep(1 * time.Second)
		browser.OpenURL("http://localhost:8080/")
	}()

	// Block listening for requests from the UI
	app.Listen("localhost:8080")

}

func DevServerFrom(configFile string) error {
	// Read configuration file
	cfg, err := readConfiguration(configFile)
	if err != nil {
		slog.Error("reading configuration", "configFile", configFile, "error", err)
		return err
	}

	go watchAndBuild(cfg)

	DevServer(cfg)
	return nil
}
