FROM openjdk:8-jdk-alpine

VOLUME /tmp
EXPOSE 9292
COPY target/oauth-cassandra-1.0.jar app.jar
RUN sh -c 'touch /app.jar'

ENTRYPOINT java -Djava.security.egd=file:/dev/./urandom -Dspring.data.cassandra.contact-points=${CASSANDRA_HOST} -DCASSANDRA_HOST=${CASSANDRA_HOST} -jar app.jar