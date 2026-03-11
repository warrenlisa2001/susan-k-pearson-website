#!/bin/bash
# Health check script for elemental-healing service

# Check if port 3000 is responding
if ! curl -s -f -o /dev/null http://localhost:3000; then
    echo "$(date): Port 3000 not responding, restarting service..."
    pm2 restart elemental-healing
    sleep 15
    
    # Check again
    if ! curl -s -f -o /dev/null http://localhost:3000; then
        echo "$(date): Service still not responding, doing full restart..."
        pm2 delete elemental-healing
        pkill -f wrangler
        sleep 2
        cd /home/user/webapp
        pm2 start ecosystem.config.cjs
    else
        echo "$(date): Service recovered successfully"
    fi
else
    echo "$(date): Service healthy"
fi
