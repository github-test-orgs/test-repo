npm audit --json > audit.json
# Check if any high severity vulnerabilities are found
if grep -q '"severity":"high"' audit.json; then
  echo "High severity vulnerabilities found!"
  exit 1  # Fail the workflow
else
  echo "No high severity vulnerabilities found"
fi