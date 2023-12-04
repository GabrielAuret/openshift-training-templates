# With file param

oc new-app template-fastapi.yaml --param-file=env.params

# With param in template

oc process -f template-fastapi.yaml | oc apply -f -
