
class EmailNotification {
    send(message) {
      console.log(`Enviando Email: ${message}`);
    }
  }
  
  class SMSNotification {
    send(message) {
      console.log(`Enviando SMS: ${message}`);
    }
  }
  
  class NotificationFactory {
    static createNotification(type) {
      switch (type) {
        case "email":
          return new EmailNotification();
        case "sms":
          return new SMSNotification();
        default:
          throw new Error("Tipo de notificação inválido.");
      }
    }
  }
  

  function main() {
    const emailNotif = NotificationFactory.createNotification("email");
    const smsNotif = NotificationFactory.createNotification("sms");
  
    emailNotif.send("Email Pix recebido de Ugioni no valor de R$ 100,00");
    smsNotif.send("SMS Pix recebido de Ugioni no valor de R$ 100,00");
  }
  
  main();