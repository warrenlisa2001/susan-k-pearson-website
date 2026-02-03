#!/bin/bash
while true; do
  curl -s http://localhost:3000 > /dev/null
  sleep 300  # 5 minutes
done
