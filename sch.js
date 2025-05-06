document.addEventListener('DOMContentLoaded', () => {
    const classSelector = document.getElementById('class-selector');
    const daySelector = document.getElementById('day-selector');
    const scheduleTitle = document.getElementById('schedule-title');
    const scheduleDisplay = document.getElementById('schedule-display');
    const LAST_CLASS_STORAGE_KEY = 'schoolScheduleLastSelectedClass';

    let highlightIntervalId = null;

    function getSavedClass() {
        try {
            const savedClass = localStorage.getItem(LAST_CLASS_STORAGE_KEY);
            if (savedClass && classSelector.querySelector(`option[value="${savedClass}"]`)) {
                return savedClass;
            }
        } catch (e) {
            console.error("Error reading from localStorage:", e);
        }
        return null;
    }

    function saveClass(className) {
        try {
            localStorage.setItem(LAST_CLASS_STORAGE_KEY, className);
        } catch (e) {
            console.error("Error writing to localStorage:", e);
        }
    }

    function loadSavedClassOrDefault() {
        const savedClass = getSavedClass();
        if (savedClass) {
            classSelector.value = savedClass;
            console.log(`Loaded saved class: ${savedClass}`);
        } else {
            console.log('No valid saved class found, using default.');
        }
    }

    const schedules = {
        "X-1": {
            "Monday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                { time: '11.50-12.30', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'INDONESIA' },
                { time: '13.35-14.10', subject: 'HISTORY' },
                { time: '14.10-14.45', subject: 'HISTORY' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Tuesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ART' },
                { time: '11.50-12.30', subject: 'ART' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ENGLISH' },
                { time: '13.35-14.10', subject: 'ENGLISH' },
                { time: '14.10-14.45', subject: 'ENGLISH' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Wednesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'CHRISTIAN STUDIES' },
                { time: '11.50-12.30', subject: 'CHRISTIAN STUDIES' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ENGLISH' },
                { time: '13.35-14.10', subject: 'ENGLISH' },
                { time: '14.10-14.45', subject: 'ENGLISH' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Thursday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'PURPOSEFUL LIVING' },
                { time: '11.50-12.30', subject: 'PURPOSEFUL LIVING' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'INDONESIA' },
                { time: '13.35-14.10', subject: 'INDONESIA' },
                { time: '14.10-14.45', subject: 'MATH' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Friday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'MATH' },
                { time: '08.00-08.40', subject: 'MATH' },
                { time: '08.40-09.05', subject: 'BREAK' },
                { time: '09.05-09.45', subject: 'CIVIC' },
                { time: '09.45-10.25', subject: 'CIVIC' },
                { time: '10.25-11.05', subject: 'INDEPENDENT LEARNING' },
                { time: '11.05-11.45', subject: 'INDEPENDENT LEARNING' },
                { time: '11.45-12.10', subject: 'BREAK' },
                { time: '12.10-12.50', subject: 'PD/INSIGHT' },
                { time: '12.50-13.30', subject: 'PD/INSIGHT' },
            ]
        },
        "X-2": {
            "Monday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ENGLISH' },
                { time: '11.50-12.30', subject: 'ENGLISH' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'CIVIC' },
                { time: '13.35-14.10', subject: 'INDONESIA' },
                { time: '14.10-14.45', subject: 'INDONESIA' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Tuesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ART' },
                { time: '10.25-11.05', subject: 'ART' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'MATH' },
                { time: '13.35-14.10', subject: 'PURPOSEFUL LIVING' },
                { time: '14.10-14.45', subject: 'PURPOSEFUL LIVING' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Wednesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ENGLISH' },
                { time: '11.50-12.30', subject: 'ENGLISH' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'CIVIC' },
                { time: '13.35-14.10', subject: 'HISTORY' },
                { time: '14.10-14.45', subject: 'HISTORY' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Thursday": [
                 { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                 { time: '07.20-08.00', subject: 'ELECTIVE' },
                 { time: '08.00-08.40', subject: 'ELECTIVE' },
                 { time: '08.40-09.20', subject: 'ELECTIVE' },
                 { time: '09.20-09.45', subject: 'BREAK' },
                 { time: '09.45-10.25', subject: 'ELECTIVE' },
                 { time: '10.25-11.05', subject: 'ELECTIVE' },
                 { time: '11.05-11.10', subject: 'MOVING' },
                 { time: '11.10-11.50', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                 { time: '11.50-12.30', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                 { time: '12.30-13.00', subject: 'BREAK' },
                 { time: '13.00-13.35', subject: 'MATH' },
                 { time: '13.35-14.10', subject: 'MATH' },
                 { time: '14.10-14.45', subject: 'INDONESIA' },
                 { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Friday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ENGLISH' },
                { time: '08.00-08.40', subject: 'ENGLISH' },
                { time: '08.40-09.05', subject: 'BREAK' },
                { time: '09.05-09.45', subject: 'CHRISTIAN STUDIES' },
                { time: '09.45-10.25', subject: 'CHRISTIAN STUDIES' },
                { time: '10.25-11.05', subject: 'INDEPENDENT LEARNING' },
                { time: '11.05-11.45', subject: 'INDEPENDENT LEARNING' },
                { time: '11.45-12.10', subject: 'BREAK' },
                { time: '12.10-12.50', subject: 'PD/INSIGHT' },
                { time: '12.50-13.30', subject: 'PD/INSIGHT' },
            ]
        },
        "X-3": {
            "Monday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'PURPOSEFUL LIVING' },
                { time: '11.50-12.30', subject: 'PURPOSEFUL LIVING' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ENGLISH' },
                { time: '13.35-14.10', subject: 'ENGLISH' },
                { time: '14.10-14.45', subject: 'ENGLISH' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Tuesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ART' },
                { time: '10.25-11.05', subject: 'ART' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'INDONESIA' },
                { time: '13.35-14.10', subject: 'INDONESIA' },
                { time: '14.10-14.45', subject: 'INDONESIA' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Wednesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'MATH' },
                { time: '11.50-12.30', subject: 'MATH' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'MATH' },
                { time: '13.35-14.10', subject: 'CHRISTIAN STUDIES' },
                { time: '14.10-14.45', subject: 'CHRISTIAN STUDIES' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Thursday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'CIVIC' },
                { time: '11.50-12.30', subject: 'CIVIC' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ENGLISH' },
                { time: '13.35-14.10', subject: 'ENGLISH' },
                { time: '14.10-14.45', subject: 'ENGLISH' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Friday": [
                 { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                 { time: '07.20-08.00', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                 { time: '08.00-08.40', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                 { time: '08.40-09.05', subject: 'BREAK' },
                 { time: '09.05-09.45', subject: 'HISTORY' },
                 { time: '09.45-10.25', subject: 'HISTORY' },
                 { time: '10.25-11.05', subject: 'INDEPENDENT LEARNING' },
                 { time: '11.05-11.45', subject: 'INDEPENDENT LEARNING' },
                 { time: '11.45-12.10', subject: 'BREAK' },
                 { time: '12.10-12.50', subject: 'PD/INSIGHT' },
                 { time: '12.50-13.30', subject: 'PD/INSIGHT' },
            ]
        },
        "XI-1": {
            "Monday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'BAHASA INDONESIA' },
                { time: '08.00-08.40', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                { time: '08.40-09.20', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ENGLISH' },
                { time: '10.25-11.05', subject: 'ENGLISH' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Tuesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'HISTORY' },
                { time: '08.00-08.40', subject: 'HISTORY' },
                { time: '08.40-09.20', subject: 'CIVIC' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ART' },
                { time: '10.25-11.05', subject: 'ART' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Wednesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'MATH' },
                { time: '08.00-08.40', subject: 'CHRISTIAN STUDIES' },
                { time: '08.40-09.20', subject: 'CHRISTIAN STUDIES' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ENGLISH' },
                { time: '10.25-11.05', subject: 'ENGLISH' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Thursday": [
                 { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                 { time: '07.20-08.00', subject: 'BAHASA INDONESIA' },
                 { time: '08.00-08.40', subject: 'PURPOSEFUL LIVING' },
                 { time: '08.40-09.20', subject: 'PURPOSEFUL LIVING' },
                 { time: '09.20-09.45', subject: 'BREAK' },
                 { time: '09.45-10.25', subject: 'ENGLISH' },
                 { time: '10.25-11.05', subject: 'ENGLISH' },
                 { time: '11.05-11.10', subject: 'MOVING' },
                 { time: '11.10-11.50', subject: 'ELECTIVE' },
                 { time: '11.50-12.30', subject: 'ELECTIVE' },
                 { time: '12.30-13.00', subject: 'BREAK' },
                 { time: '13.00-13.35', subject: 'ELECTIVE' },
                 { time: '13.35-14.10', subject: 'ELECTIVE' },
                 { time: '14.10-14.45', subject: 'ELECTIVE' },
                 { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Friday": [
                 { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                 { time: '07.20-08.00', subject: 'BAHASA INDONESIA' },
                 { time: '08.00-08.40', subject: 'BAHASA INDONESIA' },
                 { time: '08.40-09.05', subject: 'BREAK' },
                 { time: '09.05-09.45', subject: 'MATH' },
                 { time: '09.45-10.25', subject: 'MATH' },
                 { time: '10.25-11.05', subject: 'LIFE SKILLS' },
                 { time: '11.05-11.45', subject: 'LIFE SKILLS' },
                 { time: '11.45-12.10', subject: 'BREAK' },
                 { time: '12.10-12.50', subject: 'PD/INSIGHT' },
                 { time: '12.50-13.30', subject: 'PD/INSIGHT' },
            ]
        },
        "XI-2": {
            "Monday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ENGLISH' },
                { time: '08.00-08.40', subject: 'ENGLISH' },
                { time: '08.40-09.20', subject: 'BAHASA INDONESIA' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'BAHASA INDONESIA' },
                { time: '10.25-11.05', subject: 'BAHASA INDONESIA' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Tuesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'MATH' },
                { time: '08.00-08.40', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                { time: '08.40-09.20', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ART' },
                { time: '10.25-11.05', subject: 'ART' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Wednesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ENGLISH' },
                { time: '08.00-08.40', subject: 'ENGLISH' },
                { time: '08.40-09.20', subject: 'CIVIC' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'PURPOSEFUL LIVING' },
                { time: '10.25-11.05', subject: 'PURPOSEFUL LIVING' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Thursday": [
                 { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                 { time: '07.20-08.00', subject: 'MATH' },
                 { time: '08.00-08.40', subject: 'MATH' },
                 { time: '08.40-09.20', subject: 'CIVIC' },
                 { time: '09.20-09.45', subject: 'BREAK' },
                 { time: '09.45-10.25', subject: 'HISTORY' },
                 { time: '10.25-11.05', subject: 'HISTORY' },
                 { time: '11.05-11.10', subject: 'MOVING' },
                 { time: '11.10-11.50', subject: 'ELECTIVE' },
                 { time: '11.50-12.30', subject: 'ELECTIVE' },
                 { time: '12.30-13.00', subject: 'BREAK' },
                 { time: '13.00-13.35', subject: 'ELECTIVE' },
                 { time: '13.35-14.10', subject: 'ELECTIVE' },
                 { time: '14.10-14.45', subject: 'ELECTIVE' },
                 { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Friday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'CHRISTIAN STUDIES' },
                { time: '08.00-08.40', subject: 'CHRISTIAN STUDIES' },
                { time: '08.40-09.05', subject: 'BREAK' },
                { time: '09.05-09.45', subject: 'ENGLISH' },
                { time: '09.45-10.25', subject: 'ENGLISH' },
                { time: '10.25-11.05', subject: 'LIFE SKILLS' },
                { time: '11.05-11.45', subject: 'LIFE SKILLS' },
                { time: '11.45-12.10', subject: 'BREAK' },
                { time: '12.10-12.50', subject: 'PD/INSIGHT' },
                { time: '12.50-13.30', subject: 'PD/INSIGHT' },
            ]
        },
        "XI-3": {
            "Monday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'MATH' },
                { time: '08.00-08.40', subject: 'HISTORY' },
                { time: '08.40-09.20', subject: 'HISTORY' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'PURPOSEFUL LIVING' },
                { time: '10.25-11.05', subject: 'PURPOSEFUL LIVING' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Tuesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ENGLISH' },
                { time: '08.00-08.40', subject: 'ENGLISH' },
                { time: '08.40-09.20', subject: 'ENGLISH' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ART' },
                { time: '10.25-11.05', subject: 'ART' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Wednesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ENGLISH' },
                { time: '08.00-08.40', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                { time: '08.40-09.20', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'BAHASA INDONESIA' },
                { time: '10.25-11.05', subject: 'BAHASA INDONESIA' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Thursday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'BAHASA INDONESIA' },
                { time: '08.00-08.40', subject: 'CHRISTIAN STUDIES' },
                { time: '08.40-09.20', subject: 'CHRISTIAN STUDIES' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'MATH' },
                { time: '10.25-11.05', subject: 'MATH' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ELECTIVE' },
                { time: '11.50-12.30', subject: 'ELECTIVE' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'ELECTIVE' },
                { time: '13.35-14.10', subject: 'ELECTIVE' },
                { time: '14.10-14.45', subject: 'ELECTIVE' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Friday": [
                 { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                 { time: '07.20-08.00', subject: 'CIVIC' },
                 { time: '08.00-08.40', subject: 'CIVIC' },
                 { time: '08.40-09.05', subject: 'BREAK' },
                 { time: '09.05-09.45', subject: 'ENGLISH' },
                 { time: '09.45-10.25', subject: 'ENGLISH' },
                 { time: '10.25-11.05', subject: 'LIFE SKILLS' },
                 { time: '11.05-11.45', subject: 'LIFE SKILLS' },
                 { time: '11.45-12.10', subject: 'BREAK' },
                 { time: '12.10-12.50', subject: 'PD/INSIGHT' },
                 { time: '12.50-13.30', subject: 'PD/INSIGHT' },
            ]
        },
        "XII": {
            "Monday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ART' },
                { time: '11.50-12.30', subject: 'ART' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'MATH' },
                { time: '13.35-14.10', subject: 'MATH' },
                { time: '14.10-14.45', subject: 'MATH' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Tuesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'PURPOSEFUL LIVING' },
                { time: '11.50-12.30', subject: 'PURPOSEFUL LIVING' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'CIVIC' },
                { time: '13.35-14.10', subject: 'ENGLISH' },
                { time: '14.10-14.45', subject: 'ENGLISH' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Wednesday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'ENGLISH' },
                { time: '11.50-12.30', subject: 'ENGLISH' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'INDONESIA' },
                { time: '13.35-14.10', subject: 'INDONESIA' },
                { time: '14.10-14.45', subject: 'INDONESIA' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Thursday": [
                { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                { time: '07.20-08.00', subject: 'ELECTIVE' },
                { time: '08.00-08.40', subject: 'ELECTIVE' },
                { time: '08.40-09.20', subject: 'ELECTIVE' },
                { time: '09.20-09.45', subject: 'BREAK' },
                { time: '09.45-10.25', subject: 'ELECTIVE' },
                { time: '10.25-11.05', subject: 'ELECTIVE' },
                { time: '11.05-11.10', subject: 'MOVING' },
                { time: '11.10-11.50', subject: 'HISTORY' },
                { time: '11.50-12.30', subject: 'HISTORY' },
                { time: '12.30-13.00', subject: 'BREAK' },
                { time: '13.00-13.35', subject: 'CIVIC' },
                { time: '13.35-14.10', subject: 'CHRISTIAN STUDIES' },
                { time: '14.10-14.45', subject: 'CHRISTIAN STUDIES' },
                { time: '14.45-15.00', subject: 'CLOSING AND MENTORING' }
            ],
            "Friday": [
                 { time: '07.00-07.20', subject: 'MORNING DEVOTION AND MENTORING' },
                 { time: '07.20-08.00', subject: 'ENGLISH' },
                 { time: '08.00-08.40', subject: 'ENGLISH' },
                 { time: '08.40-09.05', subject: 'BREAK' },
                 { time: '09.05-09.45', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                 { time: '09.45-10.25', subject: 'PHYSICAL AND HEALTH EDUCATION' },
                 { time: '10.25-11.05', subject: 'SELF STUDY' },
                 { time: '11.05-11.45', subject: 'SELF STUDY' },
                 { time: '11.45-12.10', subject: 'BREAK' },
                 { time: '12.10-12.50', subject: 'PD/INSIGHT' },
                 { time: '12.50-13.30', subject: 'PD/INSIGHT' },
            ]
        }
    };

    function parseTime(timeStr) {
        if (typeof timeStr !== 'string') {
            console.warn("Invalid timeStr type:", typeof timeStr, timeStr);
            return null;
        }
        const parts = timeStr.trim().split('.');
        if (parts.length === 2) {
            const hour = parseInt(parts[0], 10);
            const minute = parseInt(parts[1], 10);

            if (!isNaN(hour) && !isNaN(minute) &&
                hour >= 0 && hour <= 23 &&
                minute >= 0 && minute <= 59) {
                return { hour, minute };
            } else {
                console.warn("Invalid hour/minute values after parsing:", timeStr, `-> H:${hour}, M:${minute}`);
                return null;
            }
        }
        console.warn("Could not parse time string (invalid format):", timeStr);
        return null;
    }


    function highlightCurrentPeriod() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentDayIndex = now.getDay();

        const selectedDayButton = daySelector.querySelector('.day-btn.active');
        if (!selectedDayButton) {
            return;
        }

        const selectedDayName = selectedDayButton.dataset.day;
        const daysMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayName = daysMap[currentDayIndex];

        const tableBody = scheduleDisplay.querySelector('table tbody');
        if (!tableBody) {
            return;
        }

        const previouslyHighlighted = tableBody.querySelector('tr.current-period');
        if (previouslyHighlighted) {
            previouslyHighlighted.classList.remove('current-period');
        }

        if (selectedDayName !== currentDayName) {
            return;
        }

        const rows = tableBody.querySelectorAll('tr');
        let highlighted = false;

        for (const row of rows) {
            const timeCell = row.querySelector('.time');
            if (!timeCell || !timeCell.textContent) {
                console.warn("Skipping row due to missing time cell or content:", row);
                continue;
            }

            const timeRange = timeCell.textContent.trim();
            const times = timeRange.split('-');

            if (times.length !== 2) {
                 console.warn("Invalid time range format found:", timeRange, "in row:", row);
                 continue;
            }

            const startTime = parseTime(times[0]);
            const endTime = parseTime(times[1]);

            if (!startTime || !endTime) {
                console.warn("Skipping row due to failed time parsing:", timeRange, "in row:", row);
                continue;
            }

            const startMinutes = startTime.hour * 60 + startTime.minute;
            const endMinutes = endTime.hour * 60 + endTime.minute;
            const currentMinutes = currentHour * 60 + currentMinute;

            if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
                row.classList.add('current-period');
                highlighted = true;
                break;
            }
        }
    }


    function updateSchedule() {
        const selectedClass = classSelector.value;
        const selectedDayButton = daySelector.querySelector('.day-btn.active');

        if (!selectedDayButton) {
            console.warn("UpdateSchedule called but no day button is active.");
            scheduleTitle.textContent = `Schedule for ${selectedClass}`;
             if(scheduleDisplay) {
                scheduleDisplay.innerHTML = `
                    <div class="no-schedule-state">
                        <i class="fa-solid fa-info-circle"></i>
                        Please select a day.
                    </div>`;
             }
             highlightCurrentPeriod();
            return;
        }
        const selectedDay = selectedDayButton.dataset.day;

        saveClass(selectedClass);
        scheduleTitle.textContent = `Schedule for ${selectedClass} - ${selectedDay}`;

        if(scheduleDisplay) {
             scheduleDisplay.classList.add('loading');
        }

        const scheduleData = schedules[selectedClass]?.[selectedDay];

        setTimeout(() => {
            if (!scheduleDisplay) return;

            if (scheduleData && scheduleData.length > 0) {
                let tableHTML = '<table><thead><tr><th>Time</th><th>Subject</th></tr></thead><tbody>';
                scheduleData.forEach(period => {
                    let subjectClass = '';
                    const subjectText = (period.subject || '').toUpperCase();

                    if (subjectText === 'MORNING DEVOTION AND MENTORING' || subjectText === 'CLOSING AND MENTORING') {
                        subjectClass = 'highlight-devotion';
                    } else if (subjectText === 'BREAK') {
                        subjectClass = 'highlight-break';
                    } else if (subjectText === 'MOVING') {
                        subjectClass = 'highlight-moving';
                    }

                    const displayTime = typeof period.time === 'string' ? period.time : 'N/A';
                    const displaySubject = typeof period.subject === 'string' ? period.subject : '-';

                    tableHTML += `
                        <tr>
                            <td class="time">${displayTime}</td>
                            <td class="subject ${subjectClass}">${displaySubject}</td>
                        </tr>
                    `;
                });
                tableHTML += '</tbody></table>';
                scheduleDisplay.innerHTML = tableHTML;
            } else {
                scheduleDisplay.innerHTML = `
                    <div class="no-schedule-state">
                        <i class="fa-solid fa-calendar-times"></i>
                        No schedule available for ${selectedClass} on ${selectedDay}.
                    </div>`;
            }
            scheduleDisplay.classList.remove('loading');
            if (!scheduleDisplay.classList.contains('fade-transition')) {
                 scheduleDisplay.classList.add('fade-transition');
            }

            highlightCurrentPeriod();

        }, 150);
    }


    function setInitialDay() {
        const today = new Date().getDay();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayName = days[today];

        let targetDayButton = null;

        if (today >= 1 && today <= 5) {
             targetDayButton = daySelector.querySelector(`.day-btn[data-day="${currentDayName}"]`);
        }

        if (!targetDayButton) {
            console.log(`Defaulting to Monday (Today: ${currentDayName}).`);
            targetDayButton = daySelector.querySelector('.day-btn[data-day="Monday"]');
        }

        if (targetDayButton) {
            const currentActive = daySelector.querySelector('.day-btn.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            targetDayButton.classList.add('active');
            console.log(`Initial day set to: ${targetDayButton.dataset.day}`);
        } else if (daySelector.children.length > 0) {
             console.warn('Target day button (including Monday) not found. Activating first available.');
             daySelector.children[0].classList.add('active');
             console.log(`Initial day set to (fallback): ${daySelector.children[0].dataset.day}`);
        } else {
            console.error("No day buttons found in the day selector.");
        }
    }

    loadSavedClassOrDefault();
    setInitialDay();
    classSelector.addEventListener('change', updateSchedule);

    daySelector.addEventListener('click', (event) => {
        if (event.target.classList.contains('day-btn') && !event.target.classList.contains('active')) {
            const currentActive = daySelector.querySelector('.day-btn.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            event.target.classList.add('active');
            updateSchedule();
        }
    });

    updateSchedule();

    if (highlightIntervalId !== null) {
        clearInterval(highlightIntervalId);
        console.log("Cleared existing highlight interval.");
    }
    highlightIntervalId = setInterval(highlightCurrentPeriod, 60000);
    console.log(`Highlight interval started (ID: ${highlightIntervalId}). Will check every 60 seconds.`);

});
