

const access_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM0JCSjkiLCJzdWIiOiI5S01XUE0iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJhY3QgcnNldCBybG9jIHJ3ZWkgcmhyIHJudXQgcnBybyByc2xlIiwiZXhwIjoxNjMwOTQxODI1LCJpYXQiOjE2MzA5MTMwMjV9.M67flGfIZnkqYdsyHm79Sw9ZK3sY364LctJ52x18tm0"

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