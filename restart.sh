#!/bin/bash
# Quick restart script for Susan K Pearson website

echo "🔄 Restarting elemental-healing service..."

# Clean up
cd /home/user/webapp
pm2 delete elemental-healing 2>/dev/null || true
pkill -f wrangler 2>/dev/null || true
fuser -k 3000/tcp 2>/dev/null || true

# Wait a moment
sleep 2

# Start fresh
pm2 start ecosystem.config.cjs

# Wait for startup
echo "⏳ Waiting for service to start..."
sleep 15

# Test
if curl -s -f -o /dev/null http://localhost:3000; then
    echo "✅ Service is running successfully!"
    echo "🌐 Access at: https://3000-ioqgnm3ppw6cdrd5xnthp-ad490db5.sandbox.novita.ai"
else
    echo "❌ Service failed to start. Check logs with: pm2 logs elemental-healing"
fi
