const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM0JGUTkiLCJzdWIiOiI5S01XUE0iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjMwNjY0OTU4LCJpYXQiOjE2MzAwNjAxNTh9.G1auPNMyjTE-xCS4NCrX1MeBq06qvJfzPCy6YfS5yt0"

fetch('https://api.fitbit.com/1/user/-/activities/heart/date/2021-08-25/today.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json()) 
.then(json => console.log(json));

fetch('https://api.fitbit.com/1/user/-/sleep/date/2021-08-25/2021-08-31.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json()) 
.then(json => console.log(json));

fetch('https://api.fitbit.com/1/user/-/activities/steps/date/today/1w.json', {
  method: "GET",
  headers: {"Authorization": "Bearer " + access_token}
})
.then(response => response.json()) 
.then(json => console.log(json));