package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "strings"
    "time"
)

// TimeResponse represents the response structure for single timezone
type TimeResponse struct {
    CurrentTime string `json:"current_time"`
}

// MultiTimeResponse represents the response for multiple timezones
type MultiTimeResponse map[string]string

func timeHandler(w http.ResponseWriter, r *http.Request) {
    // Set content type header
    w.Header().Set("Content-Type", "application/json")

    // Get timezone parameter from URL
    tzParam := r.URL.Query().Get("tz")

    // If no timezone is provided, return UTC time
    if tzParam == "" {
        currentTime := time.Now().UTC().Format("2006-01-02 15:04:05 -0700 MST")
        response := TimeResponse{CurrentTime: currentTime}
        json.NewEncoder(w).Encode(response)
        return
    }

    // Check if multiple timezones are requested
    timezones := strings.Split(tzParam, ",")
    if len(timezones) > 1 {
        handleMultipleTimezones(w, timezones)
        return
    }

    // Handle single timezone
    handleSingleTimezone(w, tzParam)
}

func handleSingleTimezone(w http.ResponseWriter, timezone string) {
    loc, err := time.LoadLocation(timezone)
    if err != nil {
        w.WriteHeader(http.StatusNotFound)
        json.NewEncoder(w).Encode(map[string]string{"error": "invalid timezone"})
        return
    }

    currentTime := time.Now().In(loc).Format("2006-01-02 15:04:05 -0700 MST")
    response := TimeResponse{CurrentTime: currentTime}
    json.NewEncoder(w).Encode(response)
}

func handleMultipleTimezones(w http.ResponseWriter, timezones []string) {
    response := make(MultiTimeResponse)

    for _, tz := range timezones {
        loc, err := time.LoadLocation(strings.TrimSpace(tz))
        if err != nil {
            w.WriteHeader(http.StatusNotFound)
            json.NewEncoder(w).Encode(map[string]string{"error": "invalid timezone"})
            return
        }
        currentTime := time.Now().In(loc).Format("2006-01-02 15:04:05 -0700 MST")
        response[tz] = currentTime
    }

    json.NewEncoder(w).Encode(response)
}

func main() {
    http.HandleFunc("/api/time", timeHandler)
    fmt.Println("Server starting on :8080...")
    http.ListenAndServe(":8080", nil)
}