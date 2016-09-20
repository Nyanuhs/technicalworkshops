# Labs

As a follow-up to the labs below and you have big-data scenarios, you should have a look at [these](https://github.com/dx-ted-emea/bigdata-labs)


## Desktop

[Connect the data - Sample Dataset](http://www.bankrate.com/finance/retirement/best-places-retire-how-state-ranks.aspx)

[Getting started with Power BI Desktop](https://powerbi.microsoft.com/en-us/guided-learning/powerbi-learning-0-2-get-started-power-bi-desktop)

[Connect to Data Sources in Power BI Desktop](https://powerbi.microsoft.com/en-us/guided-learning/powerbi-learning-1-2-connect-to-data-sources-in-power-bi-desktop)

[Clean and transform data](https://powerbi.microsoft.com/en-us/guided-learning/powerbi-learning-1-3-clean-and-transform-data-with-query-editor)

[Create calculated columns](https://powerbi.microsoft.com/en-us/guided-learning/powerbi-learning-2-3-create-calculated-columns)

[Advanced data sources and transformation](https://powerbi.microsoft.com/en-us/guided-learning/powerbi-learning-1-4-advanced-data-sources-and-transformation)

[Creating dashboards](https://powerbi.microsoft.com/en-us/guided-learning/powerbi-learning-4-2-create-configure-dashboards)

[Using natural language](https://powerbi.microsoft.com/en-us/guided-learning/powerbi-learning-4-3-asking-questions-natural-language)


## Streaming with Stream Analytics

Anders recommends this for near realtime streaming for Device to Cloud to Power BI:

[Step 1: Creating the IoT Hub](https://azure.microsoft.com/en-us/documentation/articles/iot-hub-csharp-csharp-getstarted/#create-an-iot-hub)

[Step 2: Downloading the IoT Hub Device Explorer and creating a Device ID](https://github.com/Azure/azure-iot-sdks/blob/master/tools/DeviceExplorer/doc/how_to_use_device_explorer.md#getting-device-explorer)

[Step 3: Creating the simulator](https://azure.microsoft.com/en-us/documentation/articles/iot-hub-csharp-csharp-getstarted/#create-a-simulated-device-app)

[Step 4: Creating and configuring Stream analytics to Power BI](https://blogs.msdn.microsoft.com/uk_faculty_connection/2016/03/20/consuming-data-on-microsoft-azure-iot-hub-into-microsoft-power-bi/)



This is a two part lab. First start off by getting an EventHub up and running and some realtime data pushed to it:

[Setting up EventHub and pushing data to it](https://github.com/msdevno/technicalworkshops/blob/master/Power%20BI/EventHub/README.md)

Then, go and create a Stream Analytics job that you connect to Power BI:

[Hooking up Stream Analytics and Power BI](https://azure.microsoft.com/en-us/documentation/articles/stream-analytics-power-bi-dashboard/)

The code used in the sample application that generates the realtime data can be found here:
[EventHub Code - sample](https://gist.github.com/einari/4a6e53eca299f203ca7a3044a5d25cd0)

## Using the API

APIs can be tested on [codit](https://coditapi.portal.azure-api.net/docs/services/553f8259b9e349059c4e2be1/operations/5548f051b9e349040c126a31).

[Push Data to Power BI](https://powerbi.microsoft.com/en-us/documentation/powerbi-developer-walkthrough-push-data/)

## Visuals

Anders recommends: [Power BI Visual Tools (pbiviz)](https://github.com/Microsoft/PowerBI-visuals-tools)

and: [Synoptic Panel Custom Visual Tutorial](http://radacad.com/custom-visuals-in-power-bi-build-whatever-you-want)

[Visual Studio Extension](https://github.com/Microsoft/PowerBI-visuals/wiki/Create-new-Power-BI-Visuals-using-template)

[Custom visuals - getting started](https://github.com/Microsoft/PowerBI-visuals/wiki)

Concretely, run the [IVisual Tutorial](https://github.com/Microsoft/PowerBI-visuals/wiki/Hello-IVisual)



## Embedded

[Get started with Power BI Embedded](https://azure.microsoft.com/en-us/documentation/articles/power-bi-embedded-get-started/)

[Concrete Sample](https://azure.microsoft.com/en-us/documentation/articles/power-bi-embedded-get-started-sample/)

[Embed Power BI into your app](https://azure.microsoft.com/en-us/documentation/articles/power-bi-embedded-iframe/)

[Implement Power BI Embedded RLS](https://azure.microsoft.com/en-us/documentation/articles/power-bi-embedded-rls/)
