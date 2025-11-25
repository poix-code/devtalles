import { emailTemplate } from "../js-foundation/01-template";


describe('js-foundation/01-template.ts', () => {
    test('emailTemplate should }contain a greeting', () => {
        expect(emailTemplate).toContain('Hello ');
    });

    test('emailTemplate should contain a name placeholder', () => {
        expect(emailTemplate).toContain('{{name}}');
    });
});