import { DeviceTypes } from '../../../core/objects/DeviceTypes';
import { LeadSourceTypes } from '../../../core/objects/LeadSourceTypes';
export interface ContactData {
    gRecaptchaResponse: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    languageCode: string;
    interestedIn: string;
    leadSource: LeadSourceTypes;
    caseType?: string;
    caseDescription?: string;
    deviceType: DeviceTypes;
    operatingSystem: string;
    hasOptedOutOfEmail: string;
}
