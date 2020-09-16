var clientSystem = client.registerSystem(0, 0);

clientSystem.initialize = function () {
  const loggerConf = this.createEventData("minecraft:script_logger_config");
  loggerConf.data.log_errors = true;
  loggerConf.data.log_information = true;
  loggerConf.data.log_warnings = true;
  this.broadcastEvent("minecraft:script_logger_config", loggerConf);

  const helloEventDataDefault = { message: "" };
  clientSystem.registerEventData("butts:hello", helloEventDataDefault);
}

let firstTick = true;
clientSystem.update = function () {
  if (firstTick) {
    firstTick = false;
    let chatEventData = this.createEventData("minecraft:display_chat_event");
    chatEventData.data.message = "Client Here";
    this.broadcastEvent("minecraft:display_chat_event", chatEventData);

    let helloEventData = clientSystem.createEventData("butts:hello");
    helloEventData.data.message = "Pinky message"
    this.broadcastEvent("butts:hello", helloEventData);

    client.log("Client first tick");
  }
}