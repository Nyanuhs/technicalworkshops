## Create an Event Hub

1. Log on to the [Azure classic portal][], and click **NEW** at the bottom of the screen.

2. Click **App Services**, then **Service Bus**, then **Event Hub**, then **Quick Create**.

	![][1]

3. Type a name for your Event Hub, select your desired region, and then click **Create a new Event Hub**.

	![][2]

4. If you didn't explicitly select an existing namespace in a given region, the portal creates a namespace for you (usually ***event hub name*-ns**). Click that namespace (in this example, **eventhub-ns**).

	![][3]

5. Click the **Event Hubs** tab at the top of the page, and then click the Event Hub you just created.

	![][4]

6. Click the **Configure** tab at the top, add a rule named **SendRule** with Send rights, add another rule called **ReceiveRule** with *Manage*, *Send*, *Listen* rights, and then click **Save**.

	![][5]

7. Click the **Dashboard** tab at the top of the page, and then click **Connection Information**. Copy the two connection strings to a temporary location, as you will use them later in this tutorial.

	![][6]

Your Event Hub is now created, and you have the connection strings you need to send and receive events.

## Run data generator application

Download the [ZIP file](./EventHubDataGenerator.zip) with the binaries for the data generator. Run it and use the SendRule connection string as input for sending data.
Continue hooking up the Stream Analytics job and Power BI from [here](https://azure.microsoft.com/en-us/documentation/articles/stream-analytics-power-bi-dashboard/).

If you're interested in the source for the data generator, have a look [here](https://gist.github.com/einari/4a6e53eca299f203ca7a3044a5d25cd0).


 

<!-- Images. -->
[1]: ./create-event-hub1.png
[2]: ./create-event-hub2.png
[3]: ./create-event-hub3.png
[4]: ./create-event-hub4.png
[5]: ./create-event-hub5.png
[6]: ./create-event-hub6.png

<!-- Links -->
[Azure classic portal]: https://manage.windowsazure.com/
