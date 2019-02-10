export const LanguageGradesMap = [
    { label: 'basic', grade: 1 },
    { label: 'intermediate', grade: 2 },
    { label: 'upper-intermediate', grade: 3 },
    { label: 'advanced', grade: 4 },
    { label: 'native', grade: 5 }
];

export function gradeToLabel(g: number): string {
    const target = LanguageGradesMap.find(l => l.grade === g);
    return (!!target)
        ? target.label
        : '';
}
