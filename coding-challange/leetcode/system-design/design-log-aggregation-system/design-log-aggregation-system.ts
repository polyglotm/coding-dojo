/*
design-log-aggregation-system
leetcode/system-design/Design Log Aggregation System
URL: https://leetcode.com/explore/learn/card/system-design/689/system-design-basics/4406/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

type Log = {
  logId: number;
  machineId: number;
  serviceId: number;
  message: string;
};

class LogAggregator {
  logs: Log[] = [];

  pushLog(logId: number, machineId: number, serviceId: number, message: string): void {
    this.logs.push({
      logId, machineId, serviceId, message,
    } as Log);
  }

  getLogsFromMachine(machineId: number): number[] {
    return this.logs.filter((log) => log.machineId === machineId)
      .map((log) => log.logId);
  }

  getLogsOfService(serviceId: number): number[] {
    return this.logs.filter((log) => log.serviceId === serviceId)
      .map((log) => log.logId);
  }

  search(serviceId: number, searchString: string): string[] {
    return this.logs.filter((log) => {
      return log.serviceId === serviceId && log.message.indexOf(searchString) !== -1;
    }).map((log) => log.message);
  }
}

/**
 * Your LogAggregator object will be instantiated and called as such:
 * var obj = new LogAggregator(machines, services)
 * obj.pushLog(logId,machineId,serviceId,message)
 * var param_2 = obj.getLogsFromMachine(machineId)
 * var param_3 = obj.getLogsOfService(serviceId)
 * var param_4 = obj.search(serviceId,searchString)
 */

LogAggregator;
logAggregator = new LogAggregator(3, 3); // There are 3 machines and 3 services
logAggregator.pushLog(2322, 1, 1, 'Machine 1 Service 1 Log 1');
logAggregator.pushLog(2312, 1, 1, 'Machine 1 Service 1 Log 2');
logAggregator.pushLog(2352, 1, 1, 'Machine 1 Service 1 Log 3');
logAggregator.pushLog(2298, 1, 1, 'Machine 1 Service 1 Log 4');
logAggregator.pushLog(23221, 1, 2, 'Machine 1 Service 2 Log 1');
logAggregator.pushLog(23121, 1, 2, 'Machine 1 Service 2 Log 2');
logAggregator.pushLog(23222, 2, 2, 'Machine 2 Service 2 Log 1');
logAggregator.pushLog(23122, 2, 2, 'Machine 2 Service 2 Log 2');
logAggregator.pushLog(23521, 1, 2, 'Machine 1 Service 2 Log 3');
logAggregator.pushLog(22981, 1, 2, 'Machine 1 Service 2 Log 4');
logAggregator.pushLog(23522, 2, 2, 'Machine 2 Service 2 Log 3');
logAggregator.pushLog(22982, 2, 2, 'Machine 2 Service 2 Log 4');
logAggregator.getLogsFromMachine(2); // return [23222, 23122, 23522, 22982]
                                     // Machine 2 added 4 logs, so we return them in the order
                                     // they were added.
logAggregator.getLogsOfService(2); // return [23221, 23121, 23222, 23122, 23521, 22981, 23522, 22982]
                                   // 8 logs were added while running service 2 on a machine.
logAggregator.search(1, 'Log 1'); // return ["Machine 1 Service 1 Log 1"]
                                  // There is only one log that was added while running service 1
                                  // and contains "Log 1".
logAggregator.search(2, 'Log 3'); // return ["Machine 1 Service 2 Log 3", "Machine 2 Service 2 Log 3"]
                                  // 2 logs were added while running service 2 that contain "Log 3"
