package fasterlib

import "testing"

func TestBuildFront(t *testing.T) {
	type args struct {
		configFile string
	}
	tests := []struct {
		name    string
		args    args
		wantErr bool
	}{
		{
			name: "test1",
			args: args{
				configFile: "buildfront.yaml",
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := BuildFront(tt.args.configFile); (err != nil) != tt.wantErr {
				t.Errorf("BuildFront() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
