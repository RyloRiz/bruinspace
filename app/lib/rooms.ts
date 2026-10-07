export interface Room {
    id: number;
    name: string;
    floor: string;
    capacity: number;
    features: string[];
    locationId: number;
    groupId: number;
}

export interface Location {
    id: number;
    name: string;
    shortName: string;
    groups: Group[];
}

export interface Group {
    id: number;
    name: string;
}

export const LOCATIONS: Location[] = [
    {
        id: 4361,
        name: "Powell Library",
        shortName: "Powell",
        groups: [{ id: 7748, name: "Group Study Rooms" }],
    },
    {
        id: 5567,
        name: "Charles E. Young Research Library",
        shortName: "YRL",
        groups: [
            { id: 7749, name: "Group Study Rooms" },
            { id: 7750, name: "Collaboration Pods" },
        ],
    },
    {
        id: 6578,
        name: "Louise M. Darling Biomedical Library",
        shortName: "Biomedical",
        groups: [
            { id: 11674, name: "Main Floor Study Room" },
            { id: 14014, name: "Collaboration Hub" },
            { id: 48355, name: "Presentation Space" },
            { id: 53757, name: "Study Commons" },
        ],
    },
    {
        id: 8312,
        name: "Science and Engineering Library",
        shortName: "SEL",
        groups: [{ id: 14408, name: "Group Study Rooms" }],
    },
    {
        id: 19391,
        name: "Powell Media Lab",
        shortName: "Media Lab",
        groups: [{ id: 40875, name: "Study Rooms" }],
    },
];

// Mapping verified from UCLA Library resourceNameIdMap (calendar.library.ucla.edu)
export const ROOMS: Room[] = [
    // ── Powell Library: Group Study Rooms (lid=4361, gid=7748) ──
    { id: 29694, name: "Group Study Room A", floor: "1st", capacity: 8, features: ["Whiteboard", "Mobile Screen"], locationId: 4361, groupId: 7748 },
    { id: 29695, name: "Group Study Room B", floor: "1st", capacity: 8, features: ["Whiteboard", "Mobile Screen"], locationId: 4361, groupId: 7748 },
    { id: 29696, name: "Group Study Room C", floor: "1st", capacity: 8, features: ["Whiteboard", "Mobile Screen"], locationId: 4361, groupId: 7748 },
    { id: 29697, name: "Group Study Room D", floor: "1st", capacity: 8, features: ["Whiteboard", "Mobile Screen"], locationId: 4361, groupId: 7748 },
    { id: 29698, name: "Group Study Room E", floor: "1st", capacity: 8, features: ["Whiteboard", "Mobile Screen"], locationId: 4361, groupId: 7748 },
    { id: 29699, name: "Group Study Room F", floor: "1st", capacity: 8, features: ["Whiteboard", "Mobile Screen"], locationId: 4361, groupId: 7748 },

    // ── YRL: Group Study Rooms (lid=5567, gid=7749) ──
    { id: 29704, name: "Group Study Room G02", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29705, name: "Group Study Room G03", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29706, name: "Group Study Room G04", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29707, name: "Group Study Room G05", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29708, name: "Group Study Room G06", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29709, name: "Group Study Room G07", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29710, name: "Group Study Room G08", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29712, name: "Group Study Room G09", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29713, name: "Group Study Room G10", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29714, name: "Group Study Room G11", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29715, name: "Group Study Room G12", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29716, name: "Group Study Room G13", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29717, name: "Group Study Room G14", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },
    { id: 29718, name: "Group Study Room G15", floor: "Ground", capacity: 8, features: ["Whiteboard"], locationId: 5567, groupId: 7749 },

    // ── YRL: Collaboration Pods (lid=5567, gid=7750) ──
    { id: 29719, name: "Collaboration Pod R01", floor: "Ground", capacity: 7, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29720, name: "Collaboration Pod R02", floor: "Ground", capacity: 7, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29721, name: "Collaboration Pod R03", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29722, name: "Collaboration Pod R04", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29723, name: "Collaboration Pod R05", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29724, name: "Collaboration Pod R06", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29725, name: "Collaboration Pod R07", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29726, name: "Collaboration Pod R08", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29727, name: "Collaboration Pod R09", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29729, name: "Collaboration Pod R11", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29730, name: "Collaboration Pod R12", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29731, name: "Collaboration Pod R13", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29732, name: "Collaboration Pod R14", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29733, name: "Collaboration Pod R15", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29734, name: "Collaboration Pod R16", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29735, name: "Collaboration Pod R17", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29736, name: "Collaboration Pod R18", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29737, name: "Collaboration Pod R19", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },
    { id: 29738, name: "Collaboration Pod R20", floor: "Ground", capacity: 8, features: ["Whiteboard", "LCD Screen"], locationId: 5567, groupId: 7750 },

    // ── Biomedical Library: Main Floor Study Room (lid=6578, gid=11674) ──
    { id: 44647, name: "Room 12-077E", floor: "1st", capacity: 8, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 11674 },

    // ── Biomedical Library: Collaboration Hub (lid=6578, gid=14014) ──
    { id: 53897, name: "Collaboration Study Room A", floor: "1st", capacity: 4, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },
    { id: 200545, name: "Collaboration Study Room B", floor: "1st", capacity: 4, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },
    { id: 200546, name: "Collaboration Study Room C", floor: "1st", capacity: 3, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },
    { id: 200547, name: "Collaboration Study Room D", floor: "1st", capacity: 4, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },
    { id: 200548, name: "Collaboration Study Room E", floor: "1st", capacity: 4, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },
    { id: 200730, name: "Collaboration Study Room F", floor: "1st", capacity: 3, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },
    { id: 200549, name: "Collaboration Study Room G", floor: "1st", capacity: 4, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },
    { id: 200550, name: "Collaboration Study Room H", floor: "1st", capacity: 4, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },
    { id: 212974, name: "Collaboration Study Room L", floor: "1st", capacity: 15, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },
    { id: 212973, name: "Collaboration Study Room M", floor: "1st", capacity: 10, features: ["Whiteboard", "Screen"], locationId: 6578, groupId: 14014 },

    // ── Biomedical Library: Presentation Space (lid=6578, gid=48355) ──
    { id: 204553, name: "Collaboration Hub Presentation Space", floor: "1st", capacity: 20, features: ["Presentation", "Screen"], locationId: 6578, groupId: 48355 },

    // ── Biomedical Library: Study Commons (lid=6578, gid=53757) ──
    { id: 238891, name: "Study Commons Room 32035", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },
    { id: 238892, name: "Study Commons Room 32037", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },
    { id: 238911, name: "Study Commons Room 32041", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },
    { id: 238893, name: "Study Commons Room 32045", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },
    { id: 238894, name: "Study Commons Room 32049", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },
    { id: 238905, name: "Study Commons Room 32061", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },
    { id: 238906, name: "Study Commons Room 32063", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },
    { id: 238907, name: "Study Commons Room 32071", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },
    { id: 238908, name: "Study Commons Room 32080D", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },
    { id: 238909, name: "Study Commons Room 32080E", floor: "3rd", capacity: 6, features: [], locationId: 6578, groupId: 53757 },

    // ── Science and Engineering Library: Group Study Rooms (lid=8312, gid=14408) ──
    { id: 55389, name: "Boelter 8251A", floor: "8th", capacity: 8, features: ["Whiteboard", "Outlets"], locationId: 8312, groupId: 14408 },
    { id: 55390, name: "Geology 4697A", floor: "4th", capacity: 8, features: ["Whiteboard", "Outlets", "Natural Light"], locationId: 8312, groupId: 14408 },
    { id: 55391, name: "Geology 4697B", floor: "4th", capacity: 4, features: ["Whiteboard", "Outlets"], locationId: 8312, groupId: 14408 },

    // ── Powell Media Lab: Study Rooms (lid=19391, gid=40875) ──
    { id: 165438, name: "Media Lab Room 2", floor: "2nd", capacity: 4, features: ["Quiet Study"], locationId: 19391, groupId: 40875 },
    { id: 165439, name: "Media Lab Room 3", floor: "2nd", capacity: 4, features: ["Quiet Study"], locationId: 19391, groupId: 40875 },
    { id: 165440, name: "Media Lab Room 5", floor: "2nd", capacity: 4, features: ["Quiet Study"], locationId: 19391, groupId: 40875 },
    { id: 165441, name: "Media Lab Room 6", floor: "2nd", capacity: 4, features: ["Quiet Study"], locationId: 19391, groupId: 40875 },
];

export function getFloorsForSelection(locationId: number, groupId: number): string[] {
    const floors = new Set(
        ROOMS
            .filter((r) => r.locationId === locationId && r.groupId === groupId)
            .map((r) => r.floor)
    );
    return Array.from(floors);
}

export function getRoomsForSelection(locationId: number, groupId: number): Room[] {
    return ROOMS.filter((r) => r.locationId === locationId && r.groupId === groupId);
}

export function getRoomById(id: number): Room | undefined {
    return ROOMS.find((r) => r.id === id);
}
