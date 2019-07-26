select * from mysql.user;

create user 'encrypted_user'@'%' identified by '******';

grant all privileges on chirpy.* to 'encrypted_user'@'%' with grant option;

flush privileges;

--remember to change AWS database CIDR/IP - Inbound to aywhere 0.0.0.0/0