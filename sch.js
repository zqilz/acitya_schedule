let isWeeklyView = false;
let scheduleData = {
    'mon': {
        'X-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'PHYSICAL AND HEALNTH EDUCATION' },
            { time: '11.50-12.30', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'INDONESIA' },
            { time: '13.35-14.10', class: 'HISTORY' },
            { time: '14.10-14.45', class: 'HISTORY' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'X-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ENGLISH' },
            { time: '11.50-12.30', class: 'ENGLISH' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'CIVIC' },
            { time: '13.35-14.10', class: 'INDONESIA' },
            { time: '14.10-14.45', class: 'INDONESIA' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'X-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'PURPOSEFUL LIVING' },
            { time: '11.50-12.30', class: 'PURPOSEFUL LIVING' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ENGLISH' },
            { time: '13.35-14.10', class: 'ENGLISH' },
            { time: '14.10-14.45', class: 'ENGLISH' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'BAHASA INDONESIA' },
            { time: '08.00-08.40', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '08.40-09.20', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ENGLISH' },
            { time: '10.25-11.05', class: 'ENGLISH' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ENGLISH' },
            { time: '08.00-08.40', class: 'ENGLISH' },
            { time: '08.40-09.20', class: 'BAHASA INDONESIA' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'BAHASA INDONESIA' },
            { time: '10.25-11.05', class: 'BAHASA INDONESIA' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'MATH' },
            { time: '08.00-08.40', class: 'HISTORY' },
            { time: '08.40-09.20', class: 'HISTORY' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'PURPOSEFUL LIVING' },
            { time: '10.25-11.05', class: 'PURPOSEFUL LIVING' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ], 
        'XII': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ART' },
            { time: '11.50-12.30', class: 'ART' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'MATH' },
            { time: '13.35-14.10', class: 'MATH' },
            { time: '14.10-14.45', class: 'MATH' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ], 
    },
    'tues': {
        'X-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ART' },
            { time: '11.50-12.30', class: 'ART' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ENGLISH' },
            { time: '13.35-14.10', class: 'ENGLISH' },
            { time: '14.10-14.45', class: 'ENGLISH' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'X-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ART' },
            { time: '10.25-11.05', class: 'ART' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'MATH' },
            { time: '13.35-14.10', class: 'PURPOSEFUL LIVING' },
            { time: '14.10-14.45', class: 'PURPOSEFUL LIVING' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'X-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ART' },
            { time: '10.25-11.05', class: 'ART' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'INDONESIA' },
            { time: '13.35-14.10', class: 'INDONESIA' },
            { time: '14.10-14.45', class: 'INDONESIA' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'HISTORY' },
            { time: '08.00-08.40', class: 'HISTORY' },
            { time: '08.40-09.20', class: 'CIVIC' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ART' },
            { time: '10.25-11.05', class: 'ART' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'MATH' },
            { time: '08.00-08.40', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '08.40-09.20', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ART' },
            { time: '10.25-11.05', class: 'ART' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ENGLISH' },
            { time: '08.00-08.40', class: 'ENGLISH' },
            { time: '08.40-09.20', class: 'ENGLISH' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ART' },
            { time: '10.25-11.05', class: 'ART' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XII': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'PURPOSEFUL LIVING' },
            { time: '11.50-12.30', class: 'PURPOSEFUL LIVING' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'CIVIC' },
            { time: '14.10-14.45', class: 'ENGLISH' },
            { time: '13.35-14.10', class: 'ENGLISH' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ], 
    },
    'wed': {
        'X-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'CHRISTIAN' },
            { time: '11.50-12.30', class: 'CHRISTIAN' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ENGLISH' },
            { time: '13.35-14.10', class: 'ENGLISH' },
            { time: '14.10-14.45', class: 'ENGLISH' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'X-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ENGLISH' },
            { time: '11.50-12.30', class: 'ENGLISH' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'CIVIC' },
            { time: '13.35-14.10', class: 'HISTORY' },
            { time: '14.10-14.45', class: 'HISTORY' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'X-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'MATH' },
            { time: '11.50-12.30', class: 'MATH' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'MATH' },
            { time: '13.35-14.10', class: 'CHRISTIAN STUDIES' },
            { time: '14.10-14.45', class: 'CHRISTIAN STUDIES' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'MATH' },
            { time: '08.00-08.40', class: 'CHRISTIAN STUDIES' },
            { time: '08.40-09.20', class: 'CHRISTIAN STUDIES' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ENGLISH' },
            { time: '10.25-11.05', class: 'ENGLISH' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ENGLISH' },
            { time: '08.00-08.40', class: 'ENGLISH' },
            { time: '08.40-09.20', class: 'CIVIC' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'PURPOSEFUL LIVING' },
            { time: '10.25-11.05', class: 'PURPOSEFUL LIVING' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ENGLISH' },
            { time: '08.00-08.40', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '08.40-09.20', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'BAHASA INDONESIA' },
            { time: '10.25-11.05', class: 'BAHASA INDONESIA' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XII': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ENGLISH' },
            { time: '11.50-12.30', class: 'ENGLISH' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'INDONESIA' },
            { time: '13.35-14.10', class: 'INDONESIA' },
            { time: '14.10-14.45', class: 'INDONESIA' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ], 
    },
    'thu': {
        'X-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'PURPOSEFUL LIVING' },
            { time: '11.50-12.30', class: 'PURPOSEFUL LIVING' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'INDONESIA' },
            { time: '13.35-14.10', class: 'INDONESIA' },
            { time: '14.10-14.45', class: 'MATH' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'X-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '11.50-12.30', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'MATH' },
            { time: '13.35-14.10', class: 'MATH' },
            { time: '14.10-14.45', class: 'INDONESIA' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'X-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'CIVIC' },
            { time: '11.50-12.30', class: 'CIVIC' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ENGLISH' },
            { time: '13.35-14.10', class: 'ENGLISH' },
            { time: '14.10-14.45', class: 'ENGLISH' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'BAHASA INDONESIA' },
            { time: '08.00-08.40', class: 'PURPOSEFUL LIVING' },
            { time: '08.40-09.20', class: 'PURPOSEFUL LIVING' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ENGLISH' },
            { time: '10.25-11.05', class: 'ENGLISH' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'MATH' },
            { time: '08.00-08.40', class: 'MATH' },
            { time: '08.40-09.20', class: 'CIVIC' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'HISTORY' },
            { time: '10.25-11.05', class: 'HISTORY' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XI-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'BAHASA INDONESIA' },
            { time: '08.00-08.40', class: 'CHRISTIAN STUDIES' },
            { time: '08.40-09.20', class: 'CHRISTIAN STUDIES' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'MATH' },
            { time: '10.25-11.05', class: 'MATH' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'ELECTIVE' },
            { time: '11.50-12.30', class: 'ELECTIVE' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'ELECTIVE' },
            { time: '13.35-14.10', class: 'ELECTIVE' },
            { time: '14.10-14.45', class: 'ELECTIVE' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ],
        'XII': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ELECTIVE' },
            { time: '08.00-08.40', class: 'ELECTIVE' },
            { time: '08.40-09.20', class: 'ELECTIVE' },
            { time: '09.20-09.45', class: 'BREAK', type: 'break' },
            { time: '09.45-10.25', class: 'ELECTIVE' },
            { time: '10.25-11.05', class: 'ELECTIVE' },
            { time: '11.05-11.10', class: 'MOVING', type: 'moving' },
            { time: '11.10-11.50', class: 'HISTORY' },
            { time: '11.50-12.30', class: 'HISTORY' },
            { time: '12.30-13.00', class: 'BREAK', type: 'break' },
            { time: '13.00-13.35', class: 'CIVIC' },
            { time: '13.35-14.10', class: 'CHRISTIAN STUDIES' },
            { time: '14.10-14.45', class: 'CHRISTIAN STUDIES' },
            { time: '14.45-15.00', class: 'CLOSING AND MENTORING', type: 'special' }
        ], 
    },
    'fri': {
        'X-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'MATH' },
            { time: '08.00-08.40', class: 'MATH' },
            { time: '08.40-09.05', class: 'BREAK', type: 'break' },
            { time: '09.05-09.45', class: 'CIVIC' },
            { time: '09.45-10.25', class: 'CIVIC' },
            { time: '10.25-11.05', class: 'INDEPENDENT LEARNING' },
            { time: '11.05-11.45', class: 'INDEPENDENT LEARNING' },
            { time: '11.45-12.10', class: 'BREAK', type: 'break' },
            { time: '12.10-12.50', class: 'PD/INSIGHT' },
            { time: '12.50-13.30', class: 'PD/INSIGHT' },
        ],
        'X-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ENGLISH' },
            { time: '08.00-08.40', class: 'ENGLISH' },
            { time: '08.40-09.05', class: 'BREAK', type: 'break' },
            { time: '09.05-09.45', class: 'CHRISTIAN STUDIES' },
            { time: '09.45-10.25', class: 'CHRISTIAN STUDIES' },
            { time: '10.25-11.05', class: 'INDEPENDENT LEARNING' },
            { time: '11.05-11.45', class: 'INDEPENDENT LEARNING' },
            { time: '11.45-12.10', class: 'BREAK', type: 'break' },
            { time: '12.10-12.50', class: 'PD/INSIGHT' },
            { time: '12.50-13.30', class: 'PD/INSIGHT' },
        ],
        'X-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '08.00-08.40', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '08.40-09.05', class: 'BREAK', type: 'break' },
            { time: '09.05-09.45', class: 'HISTORY' },
            { time: '09.45-10.25', class: 'HISTORY' },
            { time: '10.25-11.05', class: 'INDEPENDENT LEARNING' },
            { time: '11.05-11.45', class: 'INDEPENDENT LEARNING' },
            { time: '11.45-12.10', class: 'BREAK', type: 'break' },
            { time: '12.10-12.50', class: 'PD/INSIGHT' },
            { time: '12.50-13.30', class: 'PD/INSIGHT' },
        ],
        'XI-1': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'BAHASA INDONESIA' },
            { time: '08.00-08.40', class: 'BAHASA INDONESIA' },
            { time: '08.40-09.05', class: 'BREAK', type: 'break' },
            { time: '09.05-09.45', class: 'MATH' },
            { time: '09.45-10.25', class: 'MATH' },
            { time: '10.25-11.05', class: 'LIFE SKILLS' },
            { time: '11.05-11.45', class: 'LIFE SKILLS' },
            { time: '11.45-12.10', class: 'BREAK', type: 'break' },
            { time: '12.10-12.50', class: 'PD/INSIGHT' },
            { time: '12.50-13.30', class: 'PD/INSIGHT' },
        ],
        'XI-2': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'CHRISTIAN STUDIES' },
            { time: '08.00-08.40', class: 'CHRISTIAN STUDIES' },
            { time: '08.40-09.05', class: 'BREAK', type: 'break' },
            { time: '09.05-09.45', class: 'ENGLISH' },
            { time: '09.45-10.25', class: 'ENGLISH' },
            { time: '10.25-11.05', class: 'LIFE SKILLS' },
            { time: '11.05-11.45', class: 'LIFE SKILLS' },
            { time: '11.45-12.10', class: 'BREAK', type: 'break' },
            { time: '12.10-12.50', class: 'PD/INSIGHT' },
            { time: '12.50-13.30', class: 'PD/INSIGHT' },
        ],
        'XI-3': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'CIVIC' },
            { time: '08.00-08.40', class: 'CIVIC' },
            { time: '08.40-09.05', class: 'BREAK', type: 'break' },
            { time: '09.05-09.45', class: 'ENGLISH' },
            { time: '09.45-10.25', class: 'ENGLISH' },
            { time: '10.25-11.05', class: 'LIFE SKILLS' },
            { time: '11.05-11.45', class: 'LIFE SKILLS' },
            { time: '11.45-12.10', class: 'BREAK', type: 'break' },
            { time: '12.10-12.50', class: 'PD/INSIGHT' },
            { time: '12.50-13.30', class: 'PD/INSIGHT' },
        ],
        'XII': [
            { time: '07.00-07.20', class: 'MORNING DEVOTION AND MENTORING', type: 'special' },
            { time: '07.20-08.00', class: 'ENGLISH' },
            { time: '08.00-08.40', class: 'ENGLISH' },
            { time: '08.40-09.05', class: 'BREAK', type: 'break' },
            { time: '09.05-09.45', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '09.45-10.25', class: 'PHYSICAL AND HEALTH EDUCATION' },
            { time: '10.25-11.05', class: 'SELF STUDY' },
            { time: '11.05-11.45', class: 'SELF STUDY' },
            { time: '11.45-12.10', class: 'BREAK', type: 'break' },
            { time: '12.10-12.50', class: 'PD/INSIGHT' },
            { time: '12.50-13.30', class: 'PD/INSIGHT' },
        ],
    },
};

// Function to update current time
function updateCurrentTime() {
    const currentTimeDiv = document.getElementById("current-time");
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Bangkok',
        hour12: false
    };
    const currentTime = new Intl.DateTimeFormat('en-US', options).format(now);
    currentTimeDiv.innerText = `Current Time: ${currentTime}`;
}

// Function to save class preference
function saveClassPreference(selectedClass) {
    localStorage.setItem("preferred-class", selectedClass);
}

// Function to load class preference
function loadClassPreference() {
    const classSelect = document.getElementById("class");
    const savedClass = localStorage.getItem("preferred-class");
    if (savedClass) {
        classSelect.value = savedClass;
    }
}

function showDailySchedule() {
    const daySelect = document.getElementById("day");
    const classSelect = document.getElementById("class");
    const scheduleTable = document.getElementById("schedule");

    const selectedDay = daySelect.value;
    const selectedClass = classSelect.value;

    // Save class preference
    saveClassPreference(selectedClass);

    // Clear previous schedule
    scheduleTable.innerHTML = '';

    // Update current time
    updateCurrentTime();

    // Map of abbreviated days to full names
    const dayNames = {
        'mon': 'Monday',
        'tues': 'Tuesday',
        'wed': 'Wednesday',
        'thu': 'Thursday',
        'fri': 'Friday'
    };

    // Get today's day in GMT+7
    const today = new Date();
    const optionsToday = { weekday: 'short', timeZone: 'Asia/Bangkok' }; // GMT+7 timezone
    const todayDay = new Intl.DateTimeFormat('en-US', optionsToday).format(today).toLowerCase();

    const isDarkMode = document.body.classList.contains('dark-mode');

    if (scheduleData[selectedDay] && scheduleData[selectedDay][selectedClass]) {
        const classSchedule = scheduleData[selectedDay][selectedClass];

        // Create header
        const headerRow = document.createElement('tr');
        const dayHeader = document.createElement('th');
        dayHeader.colSpan = 2;
        dayHeader.innerText = dayNames[selectedDay];
        if (isDarkMode) dayHeader.classList.add('dark-mode');
        headerRow.appendChild(dayHeader);
        scheduleTable.appendChild(headerRow);

        // Create subheader
        const subHeaderRow = document.createElement('tr');
        const timeHeader = document.createElement('th');
        timeHeader.innerText = 'TIME';
        const classHeader = document.createElement('th');
        classHeader.innerText = selectedClass;
        if (isDarkMode) {
            timeHeader.classList.add('dark-mode');
            classHeader.classList.add('dark-mode');
        }
        subHeaderRow.appendChild(timeHeader);
        subHeaderRow.appendChild(classHeader);
        scheduleTable.appendChild(subHeaderRow);

        // Get current time for highlighting current class
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // Populate table rows
        classSchedule.forEach(entry => {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            const classCell = document.createElement('td');

            timeCell.innerText = entry.time;
            classCell.innerText = entry.class;

            // Add class for special classes
            if (entry.type === 'special') {
                timeCell.classList.add('special-class');
                classCell.classList.add('special-class');
            } else if (entry.type === 'break') {
                timeCell.classList.add('break-class');
                classCell.classList.add('break-class');
            } else if (entry.type === 'moving') {
                timeCell.classList.add('moving-class');
                classCell.classList.add('moving-class');
            }

            // Highlight current class
            const [startTime, endTime] = entry.time.split('-');
            const [startHour, startMinute] = startTime.split('.').map(Number);
            const [endHour, endMinute] = endTime.split('.').map(Number);

            const isOngoing = 
                (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
                (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute));

            if (isOngoing && todayDay.includes(selectedDay.toLowerCase())) {
                timeCell.classList.add('ongoing-class');
                classCell.classList.add('ongoing-class');
            }

            // Apply dark mode if active
            if (isDarkMode) {
                timeCell.classList.add('dark-mode');
                classCell.classList.add('dark-mode');
            }

            row.appendChild(timeCell);
            row.appendChild(classCell);
            scheduleTable.appendChild(row);
        });
    } else {
        // Handle case where no schedule is found
        const noScheduleRow = document.createElement('tr');
        const noScheduleCell = document.createElement('td');
        noScheduleCell.colSpan = 2;
        noScheduleCell.innerText = 'No schedule available.';
        if (isDarkMode) noScheduleCell.classList.add('dark-mode');
        noScheduleRow.appendChild(noScheduleCell);
        scheduleTable.appendChild(noScheduleRow);
    }
}

function showSchedule() {
    if (isWeeklyView) {
        showWeekSchedule();
    } else {
        showDailySchedule(); // We'll create this function with the existing daily view code
    }
}

function showWeekSchedule() {
    isWeeklyView = true;
    const classSelect = document.getElementById("class");
    const scheduleTable = document.getElementById("schedule");
    const selectedClass = classSelect.value;

    // Save class preference
    saveClassPreference(selectedClass);

    // Clear previous schedule
    scheduleTable.innerHTML = '';

    // Update current time
    updateCurrentTime();

    // Get today's day in GMT+7
    const today = new Date();
    const optionsToday = { weekday: 'short', timeZone: 'Asia/Bangkok' };
    const todayDay = new Intl.DateTimeFormat('en-US', optionsToday).format(today).toLowerCase();

    const isDarkMode = document.body.classList.contains('dark-mode');

    // Create a container div for the schedules
    const containerDiv = document.createElement('div');
    containerDiv.style.display = 'flex';
    containerDiv.style.justifyContent = 'space-between';
    containerDiv.style.gap = '20px'; // Add some space between the schedules

    // Create Mon-Thu schedule table
    const monThuTable = document.createElement('table');
    monThuTable.style.flex = '3'; // Take up more space

    // Create Friday schedule table
    const friTable = document.createElement('table');
    friTable.style.flex = '1'; // Take up less space

    // Add class header
    const headerRow = document.createElement('tr');
    const classHeader = document.createElement('th');
    classHeader.colSpan = 5; // Span across all columns for Mon-Thu
    classHeader.innerText = `${selectedClass} (Monday - Thursday)`;
    if (isDarkMode) classHeader.classList.add('dark-mode');
    headerRow.appendChild(classHeader);
    monThuTable.appendChild(headerRow);

    // Create Mon-Thu day headers
    const dayHeaderRow = document.createElement('tr');
    const timeHeader = document.createElement('th');
    timeHeader.innerText = 'TIME';
    if (isDarkMode) timeHeader.classList.add('dark-mode');
    dayHeaderRow.appendChild(timeHeader);

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
    const dayKeys = ['mon', 'tues', 'wed', 'thu'];
    
    days.forEach(day => {
        const dayHeader = document.createElement('th');
        dayHeader.innerText = day;
        if (isDarkMode) dayHeader.classList.add('dark-mode');
        dayHeaderRow.appendChild(dayHeader);
    });
    monThuTable.appendChild(dayHeaderRow);

    // Get current time for highlighting
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Create rows for Monday-Thursday schedule
    const maxPeriodsMTH = scheduleData['mon'][selectedClass].length;
    for (let i = 0; i < maxPeriodsMTH; i++) {
        const row = document.createElement('tr');
        
        // Time cell
        const timeCell = document.createElement('td');
        timeCell.innerText = scheduleData['mon'][selectedClass][i].time;
        if (isDarkMode) timeCell.classList.add('dark-mode');
        row.appendChild(timeCell);

        // Add cells for Mon-Thu
        dayKeys.forEach(day => {
            const cell = document.createElement('td');
            if (scheduleData[day] && scheduleData[day][selectedClass] && scheduleData[day][selectedClass][i]) {
                const period = scheduleData[day][selectedClass][i];
                cell.innerText = period.class;

                if (period.type === 'special') {
                    cell.classList.add('special-class');
                } else if (period.type === 'break') {
                    cell.classList.add('break-class');
                } else if (period.type === 'moving') {
                    cell.classList.add('moving-class');
                }

                // Highlight current class
                const [startTime, endTime] = period.time.split('-');
                const [startHour, startMinute] = startTime.split('.').map(Number);
                const [endHour, endMinute] = endTime.split('.').map(Number);

                const isOngoing = 
                    (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
                    (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute));

                if (isOngoing && todayDay.includes(day)) {
                    cell.classList.add('ongoing-class');
                }
            }
            if (isDarkMode) cell.classList.add('dark-mode');
            row.appendChild(cell);
        });

        monThuTable.appendChild(row);
    }

    // Create Friday schedule
    // Add Friday header
    const friHeaderRow = document.createElement('tr');
    const friHeader = document.createElement('th');
    friHeader.colSpan = 2;
    friHeader.innerText = `${selectedClass} (Friday)`;
    if (isDarkMode) friHeader.classList.add('dark-mode');
    friHeaderRow.appendChild(friHeader);
    friTable.appendChild(friHeaderRow);

    // Add Friday subheader
    const friSubHeaderRow = document.createElement('tr');
    const friTimeHeader = document.createElement('th');
    friTimeHeader.innerText = 'TIME';
    const friClassHeader = document.createElement('th');
    friClassHeader.innerText = 'CLASS';
    if (isDarkMode) {
        friTimeHeader.classList.add('dark-mode');
        friClassHeader.classList.add('dark-mode');
    }
    friSubHeaderRow.appendChild(friTimeHeader);
    friSubHeaderRow.appendChild(friClassHeader);
    friTable.appendChild(friSubHeaderRow);

    // Add Friday schedule rows
    scheduleData['fri'][selectedClass].forEach(period => {
        const row = document.createElement('tr');
        
        const timeCell = document.createElement('td');
        timeCell.innerText = period.time;
        if (isDarkMode) timeCell.classList.add('dark-mode');
        row.appendChild(timeCell);

        const classCell = document.createElement('td');
        classCell.innerText = period.class;

        if (period.type === 'special') {
            classCell.classList.add('special-class');
        } else if (period.type === 'break') {
            classCell.classList.add('break-class');
        } else if (period.type === 'moving') {
            classCell.classList.add('moving-class');
        }

        // Highlight current class if it's Friday
        const [startTime, endTime] = period.time.split('-');
        const [startHour, startMinute] = startTime.split('.').map(Number);
        const [endHour, endMinute] = endTime.split('.').map(Number);

        const isOngoing = 
            (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
            (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute));

        if (isOngoing && todayDay.includes('fri')) {
            classCell.classList.add('ongoing-class');
        }

        if (isDarkMode) classCell.classList.add('dark-mode');
        row.appendChild(classCell);

        friTable.appendChild(row);
    });

    // Add tables to container
    containerDiv.appendChild(monThuTable);
    containerDiv.appendChild(friTable);

    // Add container to schedule div
    scheduleTable.appendChild(containerDiv);
}

function toggleScheduleView() {
    const weeklyToggle = document.getElementById("toggle-week-view");
    isWeeklyView = weeklyToggle.checked;
    console.log("Weekly view toggled:", isWeeklyView); // Add this line for debugging
    showSchedule();
}

function toggleDarkMode() {
    console.log("Switching themes"); // Log message when the switch is clicked
    const body = document.body;
    const tableDiv = document.getElementById("tablediv");
    const scheduleHeader = document.getElementById("schedule");

    // Toggle dark mode class
    body.classList.toggle("dark-mode");
    tableDiv.classList.toggle("dark-mode");
    
    // Update table header and cells
    const allTh = scheduleHeader.getElementsByTagName("th");
    const allTd = scheduleHeader.getElementsByTagName("td");

    for (let th of allTh) {
        th.classList.toggle("dark-mode");
    }
    for (let td of allTd) {
        td.classList.toggle("dark-mode");
    }

    // Save preference in local storage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
}

// Function to get the current day and set the schedule accordingly
function setDefaultDay() {
    const daySelect = document.getElementById("day");
    const today = new Date();
    const dayNames = ['sun', 'mon', 'tues', 'wed', 'thu', 'fri']; // Array of day abbreviations
    const currentDay = dayNames[today.getDay()]; // Get the current day abbreviation
    daySelect.value = currentDay; // Set the dropdown to the current day
}

document.addEventListener('DOMContentLoaded', function() {
    // Load the saved class preference
    loadClassPreference();

    // Set the default day
    setDefaultDay();

    // Event listener for class selection
    const classSelect = document.getElementById("class");
    classSelect.addEventListener("change", function() {
        showSchedule();
        // Save the selected class preference
        const selectedClass = this.value;
        localStorage.setItem("selectedClass", selectedClass);
    });

    // Event listener for weekly view toggle
    const weeklyToggle = document.getElementById("toggle-week-view");
    weeklyToggle.addEventListener("change", function() {
        isWeeklyView = this.checked;
        showSchedule(); // This function should handle both weekly and daily views
    });

    // Event listener for dark mode toggle
    const darkModeToggle = document.getElementById("toggle-dark-mode");
    darkModeToggle.addEventListener("change", function() {
        const body = document.body;
        const tableDiv = document.getElementById("tablediv");
        const scheduleHeader = document.getElementById("schedule");

        // Toggle dark mode class
        body.classList.toggle("dark-mode");
        tableDiv.classList.toggle("dark-mode");

        // Update table header and cells
        const allTh = scheduleHeader.getElementsByTagName("th");
        const allTd = scheduleHeader.getElementsByTagName("td");

        for (let th of allTh) {
            th.classList.toggle("dark-mode");
        }
        for (let td of allTd) {
            td.classList.toggle("dark-mode");
        }

        // Save preference in local storage
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
        
        // Refresh the schedule display to update styles
        showSchedule();
    });

    // Event listener for day selection
    const daySelect = document.getElementById("day");
    daySelect.addEventListener("change", showSchedule);

    // Check for dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        darkModeToggle.checked = true;
        document.body.classList.add("dark-mode");
        document.getElementById("tablediv").classList.add("dark-mode");
        // Update table header and cells
        const scheduleHeader = document.getElementById("schedule");
        const allTh = scheduleHeader.getElementsByTagName("th");
        const allTd = scheduleHeader.getElementsByTagName("td");
        for (let th of allTh) {
            th.classList.add("dark-mode");
        }
        for (let td of allTd) {
            td.classList.add("dark-mode");
        }
    }

    // Set initial weekly view state
    isWeeklyView = weeklyToggle.checked;

    // Call showSchedule to display the schedule for the default day
    showSchedule();
});

// Update current time every 100 milliseconds
setInterval(updateCurrentTime, 100);