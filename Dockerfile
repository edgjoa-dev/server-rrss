# Etapa de construcción (build)
FROM node:20 AS build
WORKDIR /app
# Copia los archivos de configuración
COPY package*.json ./
RUN yarn --frozen-lockfile
# Copia el código fuente
COPY . .



# Etapa de producción (prod-deps)
FROM node:20 AS prod-deps
WORKDIR /app
# Copia solo las dependencias de producción
COPY package*.json ./
RUN yarn --production



# Etapa de desarrollo (dev-deps)
FROM node:20 AS dev-deps
WORKDIR /app
# Copia todas las dependencias (incluyendo las de desarrollo)
COPY package*.json ./
RUN yarn install --frozen-lockfile
# Compila Typsscript
RUN yarn build



# Etapa de ejecución (runner)
FROM node:20 AS runner
WORKDIR /app
# Copia los archivos de la etapa de producción
COPY --from=build /app .
COPY --from=prod-deps /app/node_modules ./node_modules
EXPOSE 3000

# Configura el comando de inicio
CMD ["yarn", "start"]
