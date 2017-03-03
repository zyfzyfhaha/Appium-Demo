$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Step1/FirstMaintenance.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#AC1: Normal process for First Maintenance"
    }
  ],
  "line": 21,
  "name": "First Maintenance",
  "description": "I want to use this template for my feature file",
  "id": "first-maintenance",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@test"
    }
  ]
});
formatter.background({
  "line": 24,
  "name": "Login to system",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 25,
  "name": "Login to system for testing First Maintenance",
  "rows": [
    {
      "cells": [
        "idNumber"
      ],
      "line": 26
    },
    {
      "cells": [
        "330106198001010013"
      ],
      "line": 27
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "FirstMaintenanceStepdefs.inti(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7070476775,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "AC1: Normal process for First Maintenance",
  "description": "",
  "id": "first-maintenance;ac1:-normal-process-for-first-maintenance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start First Maintenance"
    }
  ],
  "line": 31,
  "name": "Navigate to Enter Maintenance Page",
  "rows": [
    {
      "cells": [
        "customerName"
      ],
      "line": 32
    },
    {
      "cells": [
        "uiTest001"
      ],
      "line": 33
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Enter insurance detail in Enter Maintenance Page",
  "rows": [
    {
      "cells": [
        "insuranceCompany",
        "insuranceType",
        "insuranceName",
        "Fee",
        "Money",
        "InsuranceNo",
        "startDate",
        "endDate"
      ],
      "line": 35
    },
    {
      "cells": [
        "Automation Insu",
        "商业险",
        "商业险",
        "1000",
        "50000",
        "insuranceNoTest0001",
        "2016-09-28",
        "2020-09-27"
      ],
      "line": 36
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Save in Enter Maintenance Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Check if the insurance details correct in previous page in First Maintenance process",
  "rows": [
    {
      "cells": [
        "customerName",
        "insuranceCompany",
        "insuranceType",
        "insuranceName",
        "Fee",
        "Money",
        "InsuranceNo",
        "startDate",
        "endDate",
        "insuranceStatus",
        "registrant"
      ],
      "line": 39
    },
    {
      "cells": [
        "uiTest001",
        "Automation Insu",
        "商业险",
        "商业险",
        "1000",
        "50000",
        "insuranceNoTest0001",
        "2016-09-28",
        "2020-09-27",
        "车行",
        "朱云峰"
      ],
      "line": 40
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FirstMaintenanceStepdefs.Navigate_to_Enter_Maintenance_Page(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10599693715,
  "status": "passed"
});
formatter.match({
  "location": "FirstMaintenanceStepdefs.Enter_insurance_detail_in_Enter_Maintenance_Page(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12132039493,
  "status": "passed"
});
formatter.match({
  "location": "FirstMaintenanceStepdefs.Save_in_Enter_Maintenance_Page()"
});
formatter.result({
  "duration": 2081896462,
  "status": "passed"
});
formatter.match({
  "location": "FirstMaintenanceStepdefs.Check_if_the_insurance_details_correct_in_previous_page_in_first_maintenance_process(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 14598662337,
  "status": "passed"
});
formatter.uri("Step2/RenewalInsurance.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#AC1: Normal process for First Maintenance"
    }
  ],
  "line": 21,
  "name": "Renewal Insurance",
  "description": "I want to use this template for my feature file",
  "id": "renewal-insurance",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@test"
    }
  ]
});
formatter.background({
  "line": 24,
  "name": "Login to system",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 25,
  "name": "Login to system for testing Renewal Insurance",
  "rows": [
    {
      "cells": [
        "idNumber"
      ],
      "line": 26
    },
    {
      "cells": [
        "330106198001010013"
      ],
      "line": 27
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "RenewalInsuranceStepdefs.inti(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5855628907,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "AC1: Normal process for Renewal Insurance",
  "description": "",
  "id": "renewal-insurance;ac1:-normal-process-for-renewal-insurance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#Start First Maintenance"
    }
  ],
  "line": 31,
  "name": "Navigate to Enter Maintenance Page in Renewal Insurance process",
  "rows": [
    {
      "cells": [
        "customerName"
      ],
      "line": 32
    },
    {
      "cells": [
        "uiTest001"
      ],
      "line": 33
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Enter insurance detail in Enter Maintenance Page in Renewal Insurance process",
  "rows": [
    {
      "cells": [
        "insuranceCompany",
        "insuranceType",
        "insuranceName",
        "Fee",
        "Money",
        "InsuranceNo",
        "startDate",
        "endDate",
        "insuranceStatus"
      ],
      "line": 35
    },
    {
      "cells": [
        "Automation Insu",
        "交强险",
        "交强险",
        "2000",
        "60000",
        "insuranceNoTest0002",
        "2020-09-28",
        "2030-09-27",
        "公司"
      ],
      "line": 36
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Save the insurance detail in Renewal Insurance process",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Check if the insurance details correct in previous page in Renewal Insurance process",
  "rows": [
    {
      "cells": [
        "customerName",
        "insuranceCompany",
        "insuranceType",
        "insuranceName",
        "Fee",
        "Money",
        "InsuranceNo",
        "startDate",
        "endDate",
        "insuranceStatus",
        "registrant",
        "verificationStatus",
        "isFirstMaintenance"
      ],
      "line": 39
    },
    {
      "cells": [
        "uiTest001",
        "Automation Insu",
        "交强险",
        "交强险",
        "2000",
        "60000",
        "insuranceNoTest0002",
        "2020-09-28",
        "2030-09-27",
        "公司",
        "朱云峰",
        "未核销",
        "否"
      ],
      "line": 40
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RenewalInsuranceStepdefs.Navigate_to_Enter_Maintenance_Page_in_renewal_insurance_process(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10713114066,
  "status": "passed"
});
formatter.match({
  "location": "RenewalInsuranceStepdefs.Enter_insurance_detail_in_Enter_Maintenance_Page_in_Renewal_Insurance_process(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 14506779194,
  "status": "passed"
});
formatter.match({
  "location": "RenewalInsuranceStepdefs.Save_in_Enter_Maintenance_Page()"
});
formatter.result({
  "duration": 2088341582,
  "status": "passed"
});
formatter.match({
  "location": "RenewalInsuranceStepdefs.Check_if_the_insurance_details_correct_in_previous_page_in_Renewal_Insurance_process(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 14642099700,
  "status": "passed"
});
});