import { DeviceTypes } from '../../../core/objects/DeviceTypes';
import { LeadSourceTypes } from '../../../core/objects/LeadSourceTypes';
export interface RafData {
    gRecaptchaResponse: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    languageCode: string;
    refFirstName: string;
    refLastName: string;
    refEmailAddress: string;
    leadSource: LeadSourceTypes;
    caseType?: string;
    caseDescription?: string;
    deviceType: DeviceTypes;
    operatingSystem: string;
    hasOptedOutOfEmail: string;
    hasRefOptedOutOfEmail?: string;
}
