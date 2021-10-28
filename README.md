## User Story

I work at a non-profit and need to collect and track a variety of documents from different people. I need a clear way to communicate what is needed and what I have. The information I collect can be confidential and only a limited amount of people should have access. I need a way to manage users and their access.

These documents are important for long periods of time. I need a way to quickly bring up accounts and send new documents as needs arise. 

Some documents expire and need to be re-uploaded (example: insurance, first aid cert. etc). It would be nice to have reminders (sent via email, text, dashboard) to let me and responsible parties know documentation will need to be re-uploaded.

#### nice to have:

Custom dashboard for participants. A way to securely communicate with them and allow them to engage with the greater community. Forms, how too's, training etc could also be found here.

### Commands

* docker exec -it mysql bash
         mysql -u {user} -p
* docker exec -it prisma bash

# Temporary bug with -- preview-feature
#https://github.com/prisma/prisma/issues/7053
* npx prisma db push --preview-feature
* npx prisma db seed --preview-feature