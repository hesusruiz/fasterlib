package main

import (
	"fmt"
	"os"
	"runtime/debug"
	"time"

	"github.com/hesusruiz/fasterlib"
	"github.com/urfave/cli/v2"
)

func main() {
	configFile := "buildfront.yaml"

	version := "v0.10.3"

	// Get the version control info, to embed in the program version
	rtinfo, ok := debug.ReadBuildInfo()
	if ok {
		buildSettings := rtinfo.Settings
		for _, setting := range buildSettings {
			if setting.Key == "vcs.time" {
				version = version + ", built on " + setting.Value
			}
			if setting.Key == "vcs.revision" {
				version = version + ", revision " + setting.Value
			}
		}

	}

	app := &cli.App{
		Name:     "faster",
		Version:  version,
		Compiled: time.Now(),
		Authors: []*cli.Author{
			{
				Name:  "Jesus Ruiz",
				Email: "hesus.ruiz@gmail.com",
			},
		},
		Usage: "build very fast a Webapp",
		// UsageText: "faster [options] [INPUT_FILE] (default input file is index.txt)",
		Action: func(cCtx *cli.Context) error {
			return fasterlib.BuildFront(configFile)
		},
		Commands: []*cli.Command{
			{
				Name:        "dev",
				Aliases:     []string{"d"},
				Usage:       "run a development server",
				Description: "run a development server watching for changes in the files",
				Flags: []cli.Flag{
					&cli.StringFlag{
						Name:    "subject",
						Aliases: []string{"s"},
						Usage:   "subject input data `FILE`",
						Value:   "eidascert.yaml",
					},
					&cli.StringFlag{
						Name:    "output",
						Aliases: []string{"o"},
						Usage:   "write certificate data to `FILE`",
						Value:   "mycert.p12",
					},
				},
				Action: func(cCtx *cli.Context) error {
					return fasterlib.DevServerFrom(configFile)
				},
			},
		},
	}

	if err := app.Run(os.Args); err != nil {
		fmt.Println("Error:", err)
	}

}
